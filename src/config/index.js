const config = require("dotenv/config");

const app_port = process.env.APP_PORT || 3000;

const dev_username = process.env.POSTGRES_DEV_USER;
const dev_password = process.env.POSTGRES_DEV_PASSWORD;
const prod_username = process.env.POSTGRES_PROD_USER;
const prod_password = process.env.POSTGRES_PROD_PASSWORD;

const dev_db = process.env.DEV_DB;
const prod_db = process.env.PROD_DB;
const host_prod = process.env.HOST_PROD;
const host_dev = process.env.HOST_DEV || "127.0.0.1";
const environment = process.env.NODE_ENV || "development";

const production = {
  dialect: "postgres", // type of database on we are working in
  username: prod_username, // database username
  password: prod_password, // database password
  database: prod_db,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
  logging: false, // disables database logging
  define: {
    freezeTableName: true, // remove plural naming as default
    timestamps: true, // auto 'created_at' and 'updated_at'
    underscored: true, // underscores table names such as user_database eg
    underscoredAll: true, // underscores column names such as user_table or invoice_table eg
  },
};

const development = {
  dialect: "postgres", // type of database on we are working in
  username: dev_username, // database username
  password: dev_password, // database password
  database: dev_db,
  logging: false, // disables database logging
  define: {
    freezeTableName: true, // remove plural naming as default
    timestamps: true, // auto 'created_at' and 'updated_at'
    underscored: true, // underscores table names such as user_database eg
    underscoredAll: true, // underscores column names such as user_table or invoice_table eg
  },
};

module.exports = {
  app_port,
  prod_username,
  prod_password,
  dev_username,
  dev_password,
  prod_db,
  dev_db,
  host_prod,
  host_dev,
  environment,
  production,
  development,
};
