import { host, dbUserName, dbPassword, database } from "../config/index.js";

const sequelize = {
  host: host, //path to the database
  username: dbUserName, // database username
  password: dbPassword, // database password
  database: database, // database name
  dialect: "mysql", // type of database on we are working in
  logging: false, // disables database logging
  define: {
    timestamps: true, // auto 'created_at' and 'updated_at'
    underscored: true, // underscores table names such as user_database eg
    underscoredAll: true, // underscores column names such as user_table or invoice_table eg
  },
};

export default sequelize;
