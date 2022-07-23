// const Todo = require("../models/todo");

exports.getTest = async (req, res) => {
  res.status(200).json({
    message: "hello"
    // [
    //   { id: 1, name: "clean car", complete: false},
    //   { id: 2, name: "clean cat", complete: false},
    //   { id: 3, name: "feed cat", complete: false},
    // ]
  });
}