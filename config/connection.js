const mysql = require("mysql");
const { promisify } = require("util");

const connection = mysql.createConnection({
  host: "localhost",
  user: process.env.DB_USER,
  password: process.env.DB_PWD,
  database: "burgers_db"
});

connection.connect();

// Promisify connection.query method to use async/await later
connection.proQuery = promisify(connection.query).bind(connection);

module.exports = connection;
