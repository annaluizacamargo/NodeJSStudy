const express = require("express")
const AuthController = require('./controllers/auth-controller')
const TaskController = require('./controllers/task-controller')
const authMiddleware = require("./middlewares/auth")
const router = express.Router()

router.post("/user/signUp", AuthController.signUp)

router.post("/user/signIn", AuthController.signIn)

router.post("/task/create", authMiddleware ,TaskController.create)

router.get("/task/list", authMiddleware ,TaskController.getAll)

router.get("/task/getById", authMiddleware ,TaskController.getById)

router.put("/task/update", authMiddleware ,TaskController.update)

router.delete("/task/delete", authMiddleware ,TaskController.delete)

module.exports = router;