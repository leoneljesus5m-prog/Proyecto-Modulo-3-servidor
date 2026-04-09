import { Request, Response } from "express";
import { getUsersService, createUserService, getUserByIdService } from "../services/userService";
import UserDto from "../dto/UserDto";

export const getUser = async (req: Request, res: Response) => {
  try {
    const users = await getUsersService();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener los usuarios" });
  }
};

export const getUserById = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const user = await getUserByIdService(Number(id));
    if(!user){
      res.status(404).json({ message: "Usuario no encontrado" });
    }else {
      res.status(200).json(user);
    }
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
