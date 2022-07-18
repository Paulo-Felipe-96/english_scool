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
      status: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Matriculas",
      paranoid: true,
    }
  );
  return Matriculas;
};
