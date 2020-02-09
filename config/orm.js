const connection = require("./connection");

// (async () => {
//   const res = await connection.query("SELECT * FROM ??", ["burgers"]);
//   console.log(res);
// })();

exports.orm = {
  selectAll: table => {
    const q = "SELECT * FROM ?? ORDER BY changed_at";
    const res = connection.query(q, table);
    // console.log("orm: ", res);
    return res;
  },
  insertOne: (table, postObj) => {
    const q = "INSERT INTO ?? SET ?";
    // const postObj = {}
    return connection.query(q, [table, postObj]);
  },
  updateOne: (table, postObj, whereCol, whereVal) => {
    const q = "UPDATE ?? SET ? WHERE ?? = ?";
    return connection.query(q, [table, postObj, whereCol, whereVal]);
  }
};

// (async () => {
//   const res = await orm.selectAll("burgers");
//   console.log("out", res);
// })();

// module.exports = orm;
