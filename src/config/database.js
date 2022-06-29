import { database, dbUserName, dbPassword, host } from "./index.js";

module.exports = {
  host: host, //path to the database
  username: dbUserName, // database username
  password: dbPassword, // database password
  database: database, // database name
  dialect: "mysql", // type of database on we are working in
  operatorsAliases: false, // disables a sequelize warning
  logging: false, // disables database logging
  define: {
    timestamps: true, // auto 'created_at' and 'updated_at'
    underscored: true, // underscores table names such as user_database eg
    underscoredAll: true, // underscores column names such as user_table or invoice_table eg
  },
};
