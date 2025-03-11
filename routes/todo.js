const express = require("express");
const router = express.Router();

const {createTodo} = require("../controllers/createTodo");
const {deleteTodo} = require("../controllers/deleteTodo");
const {updateTodo} = require("../controllers/updateTodo");
const {getTodo, getTodoById} = require("../controllers/getTodos");

router.post("/createTodo", createTodo);
router.get("/getTodos", getTodo);
router.get("/getTodos/:id", getTodoById);
router.put("/updateTodo/:id", updateTodo);
router.delete("/deleteTodo/:id", deleteTodo);  // Added :id parameter

module.exports = router;