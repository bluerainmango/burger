const connection = require("./connection");

exports.orm = {
  selectAll: (table, orderCol) => {
    const q = "SELECT * FROM ?? ORDER BY ??";
    const res = connection.query(q, [table, (orderCol = "id")]);

    return res;
  },
  insertOne: (table, postObj) => {
    const q = "INSERT INTO ?? SET ?";

    return connection.query(q, [table, postObj]);
  },
  updateOne: (table, postObj, whereCol, whereVal) => {
    const q = "UPDATE ?? SET ? WHERE ?? = ?";
    return connection.query(q, [table, postObj, whereCol, whereVal]);
  }
};
