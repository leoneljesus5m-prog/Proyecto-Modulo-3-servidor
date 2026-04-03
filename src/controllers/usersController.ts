import { Request, Response } from "express"
import { createUserService, getUserService, deleteUserService } from "../services/userService"
import IUser from "../interfaces/IUser";

export const createUsers = async (req:Request, res:Response) => {
    const { name, email, active } = req.body;
    const newUser: IUser = await createUserService({ name, email, active });
    res.status(201).json(newUser);
}

export const getUsers = async (req: Request, res: Response) => {
    const users: IUser[] = await getUserService();
    res.status(200).json(users);
}

export const deleteUsers = async (req: Request, res: Response) => {
    const {id} = req.body;
    await deleteUserService(id);
    res.status(200).json({message: "Usuario eliminado correctamente"});
}