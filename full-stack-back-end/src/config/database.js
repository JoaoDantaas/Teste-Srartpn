require("dotenv").config();

module.exports = {
  username: process.env.username,
  password: process.env.password,
  database: process.env.database,
  host: "localhost",
  dialect: "postgres",
  port: "5432",
};
