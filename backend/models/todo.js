const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
  message: String,
  complete: Boolean, 
},

);

const Todo = mongoose.model("todos", TodoSchema);

module.exports = Todo;
