const express = require("express");
const router = express.Router();


// import controllers
const TodoController = require("../controllers/test")

// import middleware

// api routes
router.post('/test', TodoController.create);

module.exports = router;