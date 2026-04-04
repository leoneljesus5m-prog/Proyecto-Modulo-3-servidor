import { Request, Response } from "express";

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

export const createAppointment = (req: Request, res: Response) => {
    try {
        res.status(201).json({ message: "Agendar un nuevo turno."})
    } catch (error) {
        res.status(500).json({ message: "Error al agendar el turno"});
    }
}

export const cancelAppointment = (req: Request, res: Response) => {
    try {
        res.status(200).json({ message: "Cambiar el estatus de un turno a “cancelled”."});
    } catch (error) {
        res.status(500).json({ message: "Error al cancelar el turno"});
    }
}