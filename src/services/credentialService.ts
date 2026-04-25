import { Credential } from "../entities/Credential";
import { AppDataSource } from "../config/dataSource";
import console from "console";

export const createCredentialsService = async (
  username: string,
  password: string,
): Promise<Credential | number | undefined> => {
  try {
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
): Promise<number | undefined> => {
  try {
    const credential = await AppDataSource.getRepository(Credential).findOneBy({ username });
    if (!credential || !password ||credential.password?.trim() !== password?.trim()) {
      console.log("FALLÓ LA COMPARACIÓN");
      throw new Error("Credenciales inválidas");
    }
    return credential.id;
    } catch (error: any) {
    throw error;
  }
};