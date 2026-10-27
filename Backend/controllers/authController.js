const jwt = require("jsonwebtoken")
const userModel = require("../models/userModel")


const auth = async (req, res) => {
    const { name, password } = req.body
    const user = await userModel.findOne({ name:name, password:password })

    if (user) {
        const token = jwt.sign({ user: user.name }, "secret")
        console.log("Login Successful")
        res.send({token, name})
    }
    else{
        res.send({msg:"user not found"})
    }
}

exports.authentication = auth;