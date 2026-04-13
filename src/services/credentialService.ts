import { Credential } from "../entities/Credential";
import { AppDataSource } from "../config/dataSource";

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
    const credential = await AppDataSource.manager.getRepository(Credential).findOneBy({ username });
    if (!credential) {
      throw new Error("Credential not found");
    }
    return credential.id;
    } catch (error: any) {
    throw new Error(error);
  }
};