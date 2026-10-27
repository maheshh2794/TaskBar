const express = require('express')
const { addTodo, getUserTodos, delTodo, updateTodo } = require('../controllers/todosController')

const router = express.Router()

router.get("/", getUserTodos)

router.post("/addtodo", addTodo)

router.delete("/deletetodo", delTodo)

router.patch("/updatetodo", updateTodo)



module.exports = router;