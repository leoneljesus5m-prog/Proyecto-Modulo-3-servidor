import { Request, Response } from "express";
import IUser from "../interfaces/IUser";
import { getUsersService, createUserService } from "../services/userService";
import UserDto from "../dto/UserDto";

export const getUser = async (req: Request, res: Response) => {
  try {
    const users = await getUsersService();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener los usuarios" });
  }
};

export const getUserById = (req: Request, res: Response) => {
  try {
    res
      .status(200)
      .json({ message: "Obtener el detalle de un usuario específico." });
  } catch (error) {
    res.status(500).json({ message: "Error al obtener el usuario" });
  }
};

export const registerUser = async (req: Request, res: Response) => {
  try {
    const userData: UserDto = req.body;
    const newUser = await createUserService(userData);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ message: "Error al registrar el usuario" });
  }
};

export const loginUser = (req: Request, res: Response) => {
  try {
    res.status(200).json({ message: "Login del usuario a la aplicación." });
  } catch (error) {
    res.status(500).json({ message: "Error al iniciar sesión" });
  }
};
