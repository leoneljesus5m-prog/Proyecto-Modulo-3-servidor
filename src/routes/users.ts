import { Router } from "express";
import { getUser, getUserById, registerUser, loginUser } from "../controllers/usersController";


const userRouter = Router();

userRouter.get("/", getUser);
userRouter.get("/:id", getUserById);
userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);

export default userRouter;