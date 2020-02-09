const mysql = require("mysql");
const { promisify } = require("util");

console.log("env", process.env.NODE_ENV);

let connection;

if (process.env.NODE_ENV === "development") {
  // When development mode, connect to local DB
  connection = mysql.createConnection({
    host: "localhost",
    user: process.env.DEV_DB_USER,
    password: process.env.DEV_DB_PWD,
    database: "burgers_db"
  });
} else {
  // When production mode, connect to remote DB
  connection = mysql.createConnection(process.env.DATABASE_URL);
}

connection.connect(err => {
  if (err) {
    console.log(`🚨 Cannot connect to DB! : ${err}`);
    process.exit(1);
  }
  console.log("Connected to DB...");
});

// Promisify connection.query method to use with async/await later
connection.proQuery = promisify(connection.query).bind(connection);

module.exports = connection;
