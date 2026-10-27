const express = require("express")

const { getAllUsers, getUser, addUser, delUser } = require("../controllers/userController")
const router = express.Router()


router.get("/", getAllUsers)

router.get("/:name", getUser)

router.post("/adduser", addUser)

router.delete("/deluser", delUser)

exports.router = router;