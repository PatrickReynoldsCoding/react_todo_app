const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
  message: String,
},

);

const Todo = mongoose.model("Post", TodoSchema);

module.exports = Todo;
