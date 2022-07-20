"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Pessoas extends Model {
    static associate(models) {
      Pessoas.hasMany(models.Turmas, {
        foreignKey: "id_docente",
      });
      Pessoas.hasMany(models.Matriculas, {
        foreignKey: "id_estudante",
      });
    }
  }
  Pessoas.init(
    {
      nome: {
        type: DataTypes.STRING,
        validate: {
          nameValidation: (data) => {
            if (!data || data === null) {
              throw new Error("informe seu nome");
            }

            if (data.length < 3) {
              throw new Error("o campo nome deve ter mais de 3 caracteres");
            }
          },
        },
      },
      ativo: DataTypes.BOOLEAN,
      email: {
        type: DataTypes.BOOLEAN,
        validate: {
          isEmail: { args: true, msg: "dado do tipo e-mail inválido" },
        },
      },
      role: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Pessoas",
      paranoid: true,
      defaultScope: {
        where: {
          ativo: true,
        },
      },
      scopes: {
        all: {
          where: {},
        },
      },
    }
  );
  return Pessoas;
};
