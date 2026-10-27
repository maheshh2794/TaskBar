const mongoose = require("mongoose")
const {Schema, model} =  mongoose;

const todoSchema = new Schema({
    name:{type:String,default:""},
    todo:{type:String,required:true},
    status:{type:String,default:"pending"},
    date:{type:Date,default:Date.now()+(5.5*60*60*1000)}
})

const todoModel = model("Todo", todoSchema);

module.exports = todoModel;