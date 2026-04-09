import { Router } from "express";
import { getUserAppointments, getAppointmentsById, createAppointment, cancelAppointment } from "../controllers/appointController";


const appointmentRouter = Router();

appointmentRouter.get("/", getUserAppointments);
appointmentRouter.get("/:id", getAppointmentsById);
appointmentRouter.post("/schedule", createAppointment);
appointmentRouter.put("/cancel/:id", cancelAppointment);

export default appointmentRouter;