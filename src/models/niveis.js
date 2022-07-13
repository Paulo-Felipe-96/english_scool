"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Niveis extends Model {
    static associate(models) {
      Niveis.hasMany(models.Turmas, {
        foreignKey: "id_nivel",
      });
    }
  }
  Niveis.init(
    {
      descricao: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Niveis",
    }
  );
  return Niveis;
};
