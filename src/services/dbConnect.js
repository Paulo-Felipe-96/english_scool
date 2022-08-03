const {
  dev_username,
  dev_password,
  host_dev,
  dev_db,
  dev_options,
  prod_username,
  prod_password,
  host_prod,
  prod_db,
  prod_options,
} = require("../config");

module.exports = function connect(connection, Sequelize, environment) {
  if (environment === "development") {
    connection = new Sequelize(
      `postgres://${dev_username}:${dev_password}@${host_dev}:5432/${dev_db}`,
      dev_options
    );
  } else {
    connection = new Sequelize(
      `postgres://${prod_username}:${prod_password}@${host_prod}:5432/${prod_db}`,
      prod_options
    );
  }
  return connection;
};
