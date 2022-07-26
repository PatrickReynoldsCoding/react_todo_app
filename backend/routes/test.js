const express = require("express");
const router = express.Router();


// import controllers
const TodoController = require("../controllers/test")

// import middleware

// api routes

// get all todo in DB
router.get('/', TodoController.showAll);

// create one todo in DB
router.post('/test', TodoController.create);

// update all todos in DB



module.exports = router;