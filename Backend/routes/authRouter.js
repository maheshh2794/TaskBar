const express = require("express")
const { authentication } = require("../controllers/authController")
const router = express.Router()

router.post("/",authentication)

exports.loginrouter = router;