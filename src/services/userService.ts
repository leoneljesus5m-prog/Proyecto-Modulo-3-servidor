import UserDto from "../dto/UserDto";
import { createCredentialsService, validateCredentialsService } from "./credentialService";
import { User } from "../entities/User";
import { AppDataSource } from "../config/dataSource";
import ICredential from "../interfaces/ICredential";


export const getUsersService = async (): Promise<User[]> => {
  try {
    const users = await AppDataSource.manager.getRepository(User).find({
      relations: {
        credential: true
      }
    });
    return users;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const getUserByIdService = async (id: number) => {
  try {
    return await AppDataSource.manager.getRepository(User).findOne({
      where: { id },
      relations: {
        appointments: true,
      }
    });
  } catch (error: any) {
    throw new Error(error);
  }
};

export const createUserService = async (userData: UserDto): Promise<User> => {
  try {
    const credentialId = await createCredentialsService(
      userData.username,
      userData.password,
    );
  if (!credentialId) {
        throw new Error("No se pudo crear la credencial");
    }
    const newUser = await AppDataSource.manager.getRepository(User).save({
      name: userData.name,
      email: userData.email,
      birthdate: new Date(userData.birthdate),
      nDni: userData.nDni,
      appointments: userData.appointments,
      credential: credentialId as any
    });
    return newUser;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const loginUserService = async (credentials: ICredential) => {
  try {
    return await validateCredentialsService(credentials.username, credentials.password);
  } catch (error: any) {
    throw new Error(error);
  }
}