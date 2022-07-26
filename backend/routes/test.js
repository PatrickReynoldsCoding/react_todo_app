const express = require("express");
const router = express.Router();


// import controllers
const TodoController = require("../controllers/test")

// import middleware

// api routes

// get all todo in DB
router.get('/', TodoController.showAll);

// create todo in DB
router.post('/test', TodoController.create);

module.exports = router;