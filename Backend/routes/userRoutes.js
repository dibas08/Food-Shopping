import express from "express"
import { loginuser,registerUser } from "../controller/userController"

const userRouter=express.Router()


userRouter.post("/register",registerUser)
userRouter.post("/login",loginuser)

export default userRouter;
