import { Request, Response } from "express";
import { getUsersService, createUserService, getUserByIdService, loginUserService } from "../services/userService";
import UserDto from "../dto/UserDto";
import ICredential from "../interfaces/ICredential";

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
  } catch (error: any) {
    res.status(400).json({message: error.message});
  }
};

export const loginUser = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body
    if(!username || !password){
      res.status(400).json({message: "Bad Request"})
    }
    const credentialId = await loginUserService({username, password})
    res.status(200).json(credentialId)
  } catch (error: any) {
    res.status(400).json({ 
    message: error.message,
    internalError: error
  });
  }
};
