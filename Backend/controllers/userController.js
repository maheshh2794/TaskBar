const userModel = require("../models/userModel")



const getAllUsers = async (req, res) => {
    const user = await userModel.find()
    res.send(user)
}

const getUser = async (req, res) => {
    const user = await userModel.find({ name: req.params.name })
    
    res.send(user)
}


const addUser = (req, res) => {
    const newUser = new userModel({ ...req.body })
    console.log(newUser)
    newUser.save()
    res.send("User Added")
}


const delUser = async (req, res) => {
    const id = req.body.id
    const user = await userModel.findByIdAndDelete(id)
    res.send(user)
}

module.exports = {getAllUsers, getUser, addUser, delUser}