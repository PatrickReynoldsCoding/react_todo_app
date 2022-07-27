const express = require("express");
const router = express.Router();

// import controllers
const TodoController = require("../controllers/test");

// import middleware

// api routes

// get all todo in DB
router.get("/", TodoController.showAll);

// create one todo in DB
router.post("/test", TodoController.create);

// update one by id
router.patch("/:id", TodoController.updateChecked);

// update all todos in DB
router.delete("/deleteCompleted", TodoController.deleteCompleted);

// update all todos in DB
router.delete("/deleteAll", TodoController.delete);

module.exports = router;
