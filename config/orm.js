const pool = require("./connection");

exports.orm = {
  selectAll: (table, orderCol = "id") => {
    // Order by 'changed_at' or 'id'
    const q = "SELECT * FROM ?? ORDER BY ??";
    return pool.proQuery(q, [table, orderCol]);
  },
  insertOne: (table, postObj) => {
    const q = "INSERT INTO ?? SET ?";
    return pool.proQuery(q, [table, postObj]);
  },
  updateOne: (table, postObj, whereCol, whereVal) => {
    const q = "UPDATE ?? SET ? WHERE ?? = ?";
    return pool.proQuery(q, [table, postObj, whereCol, whereVal]);
  }
};
