import UserDto from "../dto/UserDto";
import { createCredentialsService, validateCredentialsService } from "./credentialService";
import { User } from "../entities/User";
import { AppDataSource } from "../config/dataSource";
import ICredential from "../interfaces/ICredential";

export const getUsersService = async (): Promise<User[]> => {
  try {
    const users = await AppDataSource.manager.getRepository(User).find();
    return users;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const getUserByIdService = async (id: number) => {
  try {
    return await AppDataSource.manager.getRepository(User).findOneBy({ id });
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
    const newUser = await AppDataSource.manager.getRepository(User).save({
      name: userData.name,
      email: userData.email,
      birthdate: new Date(userData.birthdate),
      nDni: userData.nDni,
      appointments: userData.appointments,
      credentialsId: credentialId,
    });
    console.log(newUser);
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