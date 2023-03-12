const express = require("express")
const AuthControler = require('./controllers/auth-controller')

const router = express.Router()

router.post("/user/singUp", AuthControler.singUp)

module.exports = router;