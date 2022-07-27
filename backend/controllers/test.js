const Todo = require("../models/todo");

const TodoController = {
  // Add todo to DB
  create: async (req, res) => {
    console.log("creating document");
    console.log(req.body);
    try {
      const newTodo = await Todo.create({
        message: req.body.message,
        complete: req.body.complete,
      });
      res.status(200).json(newTodo);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  delete: async (req, res) => {
    try {
      await Todo.deleteMany();

      res.status(200).send("all todos deleted");
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  updateChecked: async (req, res) => {
    try {
      console.log(req.params)
      const todo = await Todo.findById(req.params.id);
      // findByIdAndUpdate( 1st parameter == object to change, 2nd parameter == an object that contains the property we want to update )
      const updateTodo = await Todo.findByIdAndUpdate(req.params.id, {
        complete: !todo.complete
      })
      res.status(200).send("Updated!")
    } catch (error) {
      res.status(400).send("Error: Can't find ID...")
    }
  },

  showAll: async (req, res) => {
    Todo.find((err, todos) => {
      if (err) {
        throw err;
      }
      console.log(todos);
      // console.log(res)
      // res.json({
      //   todos: allTodos
      // })
      res.status(200).json(todos);
    });
  },
  // showById: watch part 6 (8mins) to show how to get from params
};

module.exports = TodoController;
