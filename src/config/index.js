const config = require("dotenv/config");

const prod_port = process.env.PROD_PORT || 3001;
const dev_port = process.env.DEV_PORT || 3000;

const dev_username = process.env.POSTGRES_DEV_USER;
const dev_password = process.env.POSTGRES_DEV_PASSWORD;
const prod_username = process.env.POSTGRES_PROD_USER;
const prod_password = process.env.POSTGRES_PROD_PASSWORD;

const dev_db = process.env.DEV_DB;
const prod_db = process.env.PROD_DB;
const host_prod = process.env.HOST_PROD || "ec2-3-217-14-181.compute-1.amazonaws.com";
const host_dev = process.env.HOST_DEV || "127.0.0.1"
const environment = process.env.NODE_ENV || "development";

module.exports = {
  dev_port,
  prod_port,
  prod_username,
  prod_password,
  dev_username,
  dev_password,
  prod_db,
  dev_db,
  host_prod,
  host_dev,
  environment,
};
