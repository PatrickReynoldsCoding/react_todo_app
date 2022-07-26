const Todo = require("../models/todo");

const TodoController = {
  // Add todo to DB
  create: async (req, res) => {
    console.log("creating document")
    console.log(req.body)
      try {
        const newTodo = await Todo.create({
          message: req.body.message,
          complete: req.body.complete,
        })
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
      
  },

    update: async (req, res) => {

    },

  showAll: async (req, res) => {
    Todo.find((err, todos) => {
      if (err) {
        throw err;
      }
      console.log(todos)
      // console.log(res)
      // res.json({
      //   todos: allTodos
      // })
       res.status(200).json(todos)
    })
 
   
  },
  // showById: watch part 6 (8mins) to show how to get from params



};

module.exports = TodoController;