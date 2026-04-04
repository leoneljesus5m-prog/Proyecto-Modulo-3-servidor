import { Request, Response } from "express";

export const getUser = (req: Request, res: Response) => {
    try {
        res.status(200).json({ message: "Obtener el listado de todos los usuarios."});
    } catch (error) {
        res.status(500).json({ message: "Error al obtener los usuarios"});
    }
}

export const getUserById = (req: Request, res: Response) => {
    try {
        res.status(200).json({message : "Obtener el detalle de un usuario específico."});
    } catch (error) {
        res.status(500).json({ message: "Error al obtener el usuario"});
    }
}

export const registerUser = (req: Request, res: Response) => {
    try {
        res.status(201).json({ message: "Registro de un nuevo usuario."})
    } catch (error) {
        res.status(500).json({ message: "Error al registrar el usuario"});
    }
}

export const loginUser = (req: Request, res: Response) => {
    try {
        res.status(200).json({ message: "Login del usuario a la aplicación."});
    } catch (error) {
        res.status(500).json({ message: "Error al iniciar sesión"});
    }
}