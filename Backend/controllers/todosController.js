const todoModel = require("../models/todosModel")




const getUserTodos = async (req, res) => {
    const todo = await todoModel.find({ name: req.user })
    res.send(todo)
}

const addTodo = (req, res) => {
    const newTodo = new todoModel({ ...req.body, name: req.user })
    newTodo.save()
    console.log(newTodo)
    res.send({ msg: "Todo Added" })
}

const delTodo = async (req, res) => {
    const deltodo = await todoModel.findByIdAndDelete({ _id: req.body.id })
    console.log("Deleted task:",deltodo)
    res.send({ msg: "Toodo deleted succesfully" })
}

const updateTodo = async (req, res) => {
    const uptodo = await todoModel.findByIdAndUpdate({ _id: req.body.id }, { status: req.body.status })
    console.log(uptodo)
    res.send({ msg: "Toodo updated succesfully" })
}

module.exports = { getUserTodos, addTodo, delTodo, updateTodo }
