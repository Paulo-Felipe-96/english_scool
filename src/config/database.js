const {
  prod_username,
  prod_password,
  dev_username,
  dev_password,
  prod_db,
  dev_db,
  host,
} = require("../config");

module.exports = {
  development: {
    host: host, //path to the database
    username: dev_username, // database username
    password: dev_password, // database password
    database: dev_db, // database name
    dialect: "postgres", // type of database on we are working in
    logging: false, // disables database logging
    define: {
      freezeTableName: true, // remove plural naming as default
      timestamps: true, // auto 'created_at' and 'updated_at'
      underscored: true, // underscores table names such as user_database eg
      underscoredAll: true, // underscores column names such as user_table or invoice_table eg
    },
  },
  production: {
    host: host, //path to the database
    username: prod_username, // database username
    password: prod_password, // database password
    database: prod_db, // database name
    dialect: "postgres", // type of database on we are working in
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
  },
};
