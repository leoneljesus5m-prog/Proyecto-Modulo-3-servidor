import { Router, Request, Response } from "express";
import { createUsers, getUsers, deleteUsers } from "../controllers/usersController";
import auth from "../middlewares/auth";

const router = Router();

router.get("/users", auth, getUsers);

router.post("/users", createUsers);

router.delete("/users", deleteUsers);

export default router;