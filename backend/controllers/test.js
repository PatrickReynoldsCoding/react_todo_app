const Todo = require("../models/todo");

const TodoController = {
  create: async (req, res) => {
      const {message} = req.body

      try {
        const newTodo = await Todo.create({message})
        res.status(200).json(newTodo)
        } catch (error){
        res.status(400).json({error: error.message})
      }
      // message: "hello"
      // [
      //   { id: 1, name: "clean car", complete: false},
      //   { id: 2, name: "clean cat", complete: false},
      //   { id: 3, name: "feed cat", complete: false},
      // ]
      
  }
}

module.exports = TodoController;