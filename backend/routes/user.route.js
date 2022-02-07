import express from "express"
import UserController from "../controller/user.controller.js"


const router = express.Router()

router.get("/scores", UserController.index )

export default router

