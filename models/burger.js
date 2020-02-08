require("dotenv").config({ path: "../.env" });

const { orm } = require("../config/orm");

exports.Burger = {
  selectAll: () => {
    return orm.selectAll("burgers");
  },
  insertOne: postObj => {
    return orm.insertOne("burgers", postObj);
  },
  updateOne: (postObj, condition) => {
    return orm.updateOne("burgers", postObj, condition);
  }
};
