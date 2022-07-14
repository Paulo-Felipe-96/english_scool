"use strict";

const fs = require("fs");
const {
  environment,
  prod_username,
  prod_password,
  host_prod,
  prod_db,
  dev_username,
  dev_password,
  host_dev,
  dev_db,
  prod_options,
  dev_options,
} = require("../config");
const env = environment;
const path = require("path");
const Sequelize = require("sequelize");
const basename = path.basename(__filename);
const dbConfig = require(__dirname + "/../config/database.js")[env];
const db = {};

let sequelize;
if (dbConfig.use_env_variable) {
  sequelize = new Sequelize(process.env[dbConfig.use_env_variable], dbConfig);
} else {
  if (environment === "development") {
    sequelize = new Sequelize(
      `postgres://${dev_username}:${dev_password}@${host_dev}:5432/${dev_db}`,
      dev_options
    );
  } else {
    sequelize = new Sequelize(
      `postgres://${prod_username}:${prod_password}@${host_prod}:5432/${prod_db}`,
      prod_options
    );
  }
}

fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(
      sequelize,
      Sequelize.DataTypes
    );
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
