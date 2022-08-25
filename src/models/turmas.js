"use strict";

const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Turmas extends Model {
    static associate(models) {
      Turmas.hasMany(models.Matriculas, {
        foreignKey: "id_turma",
      });
      Turmas.belongsTo(models.Pessoas, {
        foreignKey: "id_docente",
      });
      Turmas.belongsTo(models.Niveis, {
        foreignKey: "id_nivel",
      });
    }
  }
  Turmas.init(
    {
      data_inicio: DataTypes.DATEONLY,
    },
    {
      sequelize,
      modelName: "Turmas",
      paranoid: true,
      defaultScope: {
        where: {},
        order: [["id", "ASC"]],
      },
    }
  );
  return Turmas;
};
