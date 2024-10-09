const express = require("express");
const router = express.Router();

//import controller

const { createTodo } = require("../controllers/createTodo.js");
const { getTodo,getTodoById } = require("../controllers/getTodo.js");
const { updateTodo } = require("../controllers/updateTodo.js");
const { deleteTodo } = require("../controllers/deleteTodo.js");

//define API Routes

router.post("/createTodo", createTodo);
router.get("/getTodo",getTodo);
router.get("/getTodos/:id",getTodoById)
router.put("/updateTodo/:id",updateTodo)
router.delete("/deleteTodo/:id",deleteTodo);
module.exports = router;
