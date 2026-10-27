const express = require("express")
const app = express();
const cors = require("cors")

const mongoose = require("mongoose");
const { router } = require("./routes/userRoute");
const todorouter = require("./routes/todoRoute");
const { loginrouter } = require("./routes/authRouter");
const jwt = require("jsonwebtoken");
 




app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

mongoose.connect("mongodb+srv://dbuser2:Mahesh123@maheshgunda.hpqutwf.mongodb.net/", {
    dbname: "Practice"
})
    .then(() => console.log("Mongodb connected"))
    .catch(err => console.log('connection error:', err))


function checkuser(req, res, next){
    const token = jwt.verify(req.headers.token,"secret")
    if(token){
        req.user = token.user
        next()
        
    }
    else{
        res.send({msg:"Invalid"})
    }
}


app.use('/login', loginrouter)

app.use("/users", router)

app.use("/todos",checkuser, todorouter)


app.listen(4000, () => {
    console.log("Server runn in port 4000")
})