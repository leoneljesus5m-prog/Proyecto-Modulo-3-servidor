import { Router } from "express";
import userRouter from "./users";
import appointmentRouter from "./appointments";

const router = Router();

router.use("/users", userRouter)
router.use("/appointments", appointmentRouter)

export default router;