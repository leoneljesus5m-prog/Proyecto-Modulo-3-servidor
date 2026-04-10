import IUser from "../interfaces/IUser";
import UserDto from "../dto/UserDto";
import { createCredentialsService } from "./credentialService";
import { User } from "../entities/User";
import { AppDataSource } from "../config/dataSource";

const userRepository = AppDataSource.getRepository(User);


export const getUsersService = async ():Promise<User[]>=> {
    const users = await userRepository.find({relations: {
        appointments: true        
    }});
    return users;
}

export const getUserByIdService = async (id: number)  => {
    return await userRepository.findOne({ where: { id } });
}

export const createUserService = async (userData: UserDto): Promise<User> => {
    const newCredential = await createCredentialsService(userData.username, userData.password);
    const newUser = userRepository.create({ 
        name: userData.name,
        email: userData.email,
        birthdate: new Date (userData.birthdate),
        nDni: userData.nDni,
        credential: newCredential
    });
    return await userRepository.save(newUser);
}