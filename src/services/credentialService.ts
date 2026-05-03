import { Credential } from "../entities/Credential";
import { AppDataSource } from "../config/dataSource";
import console from "console";
import { User } from "../entities";

export const createCredentialsService = async (
  username: string,
  password: string,
): Promise<number | undefined> => {
  try {
    if (!username && !password) {
      throw new Error("Username and password are required");
    }
    const newCredential = await AppDataSource.manager.save(Credential, {
      username,
      password,
    });
    console.log(newCredential);
    return newCredential.id;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const validateCredentialsService = async (
  username: string,
  password: string,
): Promise<
  | number
  | undefined
  | {
      login: boolean;
      id: number;
      username: string;
      birthdate: Date;
      email: string;
      name: string;
      nDni: number;
    }
> => {
  try {
    if (!username || !password) {
      throw new Error("Username and password are required");
    }
    const credential = await AppDataSource.getRepository(Credential).findOneBy({
      username,
    });
    if (!credential) {
      throw new Error("Credenciales inválidas");
    }
    const user = await AppDataSource.getRepository(User).findOne({
      where: { credential: { id: credential.id } },
      relations: { credential: true, appointments: true },
    });
    if (!user) {
      throw new Error("Usuario no encontrado");
    }
    if (
      !credential ||
      !password ||
      credential.password?.trim() !== password?.trim()
    ) {
      console.log("FALLÓ LA COMPARACIÓN");
      throw new Error("Credenciales inválidas");
    }
    return {
      login: true,
      id: credential.id,
      username: credential.username,
      birthdate: user.birthdate,
      email: user.email,
      name: user.name,
      nDni: user.nDni,
    };
  } catch (error: any) {
    throw error;
  }
};
