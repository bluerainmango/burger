const { orm } = require("../config/orm");

exports.Burger = {
  selectAll: () => {
    return orm.selectAll("burgers", "changed_at");
  },
  insertOne: postObj => {
    return orm.insertOne("burgers", postObj);
  },
  updateOne: (postObj, whereCol, whereVal) => {
    return orm.updateOne("burgers", postObj, whereCol, whereVal);
  }
};

exports.BurgerType = {
  selectAll: () => {
    return orm.selectAll("burger_char");
  },
  updateOne: (postObj, whereCol, whereVal) => {
    return orm.updateOne("burger_char", postObj, whereCol, whereVal);
  }
};
