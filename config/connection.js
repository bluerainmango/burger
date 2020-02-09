const mysql = require("mysql");
const { promisify } = require("util");

let pool;

if (process.env.NODE_ENV === "development") {
  // When development mode, connect to local DB
  pool = mysql.createPool({
    connectionLimit: 10,
    host: "localhost",
    user: process.env.DEV_DB_USER,
    password: process.env.DEV_DB_PWD,
    database: "burgers_db",
    acquireTimeout: 10000
  });
} else {
  // When production mode, connect to remote DB
  pool = mysql.createPool(process.env.DATABASE_URL);
}

pool.getConnection((err, connection) => {
  if (err) {
    console.log(`🚨 Cannot connect to DB! : ${err}`);
    connection.destroy();
    process.exit(1);
  }
  console.log("Connected to DB...");
});

// Promisify connection.query method to use with async/await later
pool.proQuery = promisify(pool.query).bind(pool);

module.exports = pool;
