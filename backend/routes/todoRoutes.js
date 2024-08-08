const express = require('express');
const { createTodo, getAllTodo, getTodoById, delTodoById, updateTodoById } = require('../controller/todoController');
const router = express.Router();

router.post("/createTodo",createTodo);
router.get("/getAllTodo",getAllTodo)
router.get("/getTodoById/:id",getTodoById)
router.delete("/delTodoById/:id",delTodoById)
router.patch("/updateTodoById/:id",updateTodoById)

module.exports = router;

