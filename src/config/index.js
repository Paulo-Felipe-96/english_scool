const config = require("dotenv/config");

const port = process.env.PORT || 3000;

const dev_username = process.env.MYSQL_DEV_USER;
const dev_password = process.env.MYSQL_DEV_PASSWORD;
const prod_username = process.env.MYSQL_PROD_USER;
const prod_password = process.env.MYSQL_PROD_PASSWORD;

const dev_db = process.env.MYSQL_DEV;
const prod_db = process.env.MYSQL_PROD;
const host = process.env.HOST || "127.0.0.1";
const environment = process.env.NODE_ENV;

module.exports = {
  port,
  prod_username,
  prod_password,
  dev_username,
  dev_password,
  prod_db,
  dev_db,
  host,
  environment,
};
