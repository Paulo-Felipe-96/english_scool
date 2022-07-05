const config = require("dotenv/config");

const port = process.env.PORT || 3000;
const dbUserName = process.env.MYSQL_ROOT;
const dbPassword = process.env.MYSQL_ROOT_PASSWORD;
const database = process.env.MYSQL_DATABASE;
const host = process.env.HOST || "127.0.0.1";

module.exports = {
  port,
  dbUserName,
  dbPassword,
  database,
  host,
};
