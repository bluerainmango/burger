const connection = require("./connection");

(async () => {
  const res = await connection.query("SELECT * FROM ??", ["burgers"]);
  console.log(res);
})();

const orm = {
  selectAll: async table => {
    const q = "SELECT * FROM ??";
    return await connection.query(q, [table]);
  },
  insertOne: async post => {
    const q = "INSERT INTO ?? SET ?";
    // const post = {}
    return await connection.query(q, post);
  },
  updateOne: async (table, post, condition) => {
    const q = "UPDATE ?? SET ? WHERE ?";
    return await connection.query(q, [table, post, condition]);
  }
};

module.exports = orm;
