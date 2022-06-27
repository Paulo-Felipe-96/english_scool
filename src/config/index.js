import "dotenv/config";

export const port = process.env.PORT || 3000;
export const dbUserName = process.env.MYSQL_USER;
export const dbPassword = process.env.MYSQL_PASSWORD;
export const database = process.env.MYSQL_DATABASE;
