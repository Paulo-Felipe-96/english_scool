import * as dbConfig from "./index.js";

const config = {
  host: dbConfig.host, //path to the database
  username: dbConfig.dbUserName, // database username
  password: dbConfig.dbPassword, // database password
  database: dbConfig.database, // database name
  dialect: "mysql", // type of database on we are working in
  logging: false, // disables database logging
  define: {
    timestamps: true, // auto 'created_at' and 'updated_at'
    underscored: true, // underscores table names such as user_database eg
    underscoredAll: true, // underscores column names such as user_table or invoice_table eg
  },
};

export default config;
