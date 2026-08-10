import { Router } from "express";
import { loginUserController, logoutUserController, registerUserController } from "../controllers/userController.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const userRouter = Router()


userRouter.post('/register', registerUserController);
userRouter.post('/login', loginUserController);
userRouter.post('/logout', verifyJWT, logoutUserController);


export { userRouter }