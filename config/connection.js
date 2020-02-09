const mysql = require("mysql");
const { promisify } = require("util");

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PWD,
  database: "burgers_db"
});

connection.connect(err => {
  if (err) {
    console.log(`🚨 Cannot connect to DB! : ${err}`);
    process.exit(1);
  }
  console.log("Connected to DB...");
});

// Promisify connection.query method to use async/await later
connection.proQuery = promisify(connection.query).bind(connection);

module.exports = connection;
