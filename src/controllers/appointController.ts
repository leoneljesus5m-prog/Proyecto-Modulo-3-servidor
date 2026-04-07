import { Request, Response } from "express";
import { createAppointmentService, cancelAppointmentService } from "../services/appointmentService"


export const getUserAppointments = (req: Request, res: Response) => {
    try {
        res.status(200).json({ message: "Obtener el listado de todos los turnos de todos los usuarios."});
    } catch (error) {
        res.status(500).json({ message: "Error al obtener los turnos"});
    }
}

export const getAppointmentsById = (req: Request, res: Response) => {
    try {
        res.status(200).json({message : "Obtener el detalle de un turno específico."});
    } catch (error) {
        res.status(500).json({ message: "Error al obtener el turno"});
    }
}

export const createAppointment = async (req: Request, res: Response) => {
    try {
        const appointmentData = req.body;
        await createAppointmentService(appointmentData);
        res.status(201).json({ message: "Turno agendado correctamente" });
    } catch (error) {
        res.status(500).json({ message: "Error al agendar el turno" });
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