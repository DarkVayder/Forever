import express from "express";
import { loginUser, registerUser, adminLogin } from "../controller/userController";

const userRouter = express.Router();

user.Router.post('/register',registerUser)
user.Router.post('/login',loginUser)
user.Router.post('/admin',adminLogin)

export default userRouter;