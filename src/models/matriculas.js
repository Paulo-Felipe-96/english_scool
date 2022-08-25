"use strict";

const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Matriculas extends Model {
    static associate(models) {
      Matriculas.belongsTo(models.Pessoas, {
        foreignKey: "id_estudante",
      });
      Matriculas.belongsTo(models.Turmas, {
        foreignKey: "id_turma",
      });
    }
  }
  Matriculas.init(
    {
      status: {
        type: DataTypes.STRING,
        validate: {
          statusValidation: (data) => {
            if (
              data !== "confirmado" &&
              data !== "pendente" &&
              data !== "cancelado"
            ) {
              throw new Error(
                "status inválido, informe: confirmado, pendente ou cancelado."
              );
            }
          },
        },
      },
    },
    {
      sequelize,
      modelName: "Matriculas",
      paranoid: true,
      defaultScope: {
        where: {},
        order: [["id", "ASC"]],
      },
      scopes: {
        confirmedStatus: {
          where: {
            status: "confirmado",
          },
          order: [["id_turma", "ASC"]],
        },
      },
    }
  );
  return Matriculas;
};
