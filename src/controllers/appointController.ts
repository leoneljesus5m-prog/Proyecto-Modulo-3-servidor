import { Request, Response } from "express";
import { createAppointmentService, cancelAppointmentService, getAllAppointments, getAppointmentById } from "../services/appointmentService"
import AppointmentDto from "../dto/AppointmentDto";


export const getUserAppointments = async (req: Request, res: Response) => {
    try {
        const allUsersAppointments = await getAllAppointments();
        res.status(200).json(allUsersAppointments);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener los turnos"});
    }
}

export const getAppointmentsById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const appontmentId = Number(id);
        if (isNaN(appontmentId)){
            return res.status(400).json({ message: "ID de turno inválido" });
        }
        res.status(200).json(await getAppointmentById(appontmentId));
    } catch (error) {
        res.status(500).json({ message: "Error al obtener el turno"});
    }
}

export const createAppointment = async (req: Request, res: Response) => {
    try {
        const appointmentData: AppointmentDto = req.body;
        await createAppointmentService(appointmentData);
        res.status(201).json({ message: "Turno agendado correctamente" });
        res.json(appointmentData);
    } catch (error: any) {
        res.status(500).json({ message: `Error al agendar el turno: ${error.message}` });
    }
}

export const cancelAppointment = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const appointmentId = Number(id);
        if (isNaN(appointmentId)) {
            return res.status(400).json({ message: "ID de turno inválido" });
        }
        await cancelAppointmentService(appointmentId);
        res.status(200).json({ message: "Turno cancelado correctamente" });
    } catch (error) {
        res.status(500).json({ message: "Error al cancelar el turno" });
    }
}