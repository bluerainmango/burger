const connection = require("./connection");

exports.orm = {
  selectAll: (table, orderCol) => {
    // Order by 'changed_at' or 'id'
    const q = "SELECT * FROM ?? ORDER BY ??";
    return connection.proQuery(q, [table, (orderCol = "id")]);
  },
  insertOne: (table, postObj) => {
    const q = "INSERT INTO ?? SET ?";
    return connection.proQuery(q, [table, postObj]);
  },
  updateOne: (table, postObj, whereCol, whereVal) => {
    const q = "UPDATE ?? SET ? WHERE ?? = ?";
    return connection.proQuery(q, [table, postObj, whereCol, whereVal]);
  }
};
