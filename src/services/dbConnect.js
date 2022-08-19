const {
  dev_username,
  dev_password,
  host_dev,
  dev_db,
  development,
  prod_username,
  prod_password,
  host_prod,
  prod_db,
  production,
} = require("../config");

module.exports = function connect(connection, Sequelize, environment) {
  if (environment === "development") {
    connection = new Sequelize(
      `postgres://${dev_username}:${dev_password}@${host_dev}:5432/${dev_db}`,
      development
    );
  } else {
    connection = new Sequelize(
      `postgres://${prod_username}:${prod_password}@${host_prod}:5432/${prod_db}`,
      production
    );
  }
  return connection;
};
