"use strict";
import { sequelize } from "../config/database.mjs";
import { Sequelize, Model } from "sequelize";

class Pessoas extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models) {
    // define association here
  }
}

Pessoas.init(
  {
    nome: Sequelize.STRING,
    ativo: Sequelize.BOOLEAN,
    email: Sequelize.STRING,
    role: Sequelize.STRING,
  },
  {
    sequelize,
    modelName: "Pessoas",
  }
);

export default Pessoas;
