import IUser from "../interfaces/IUser";
import UserDto from "../dto/UserDto";
import { createCredentialsService } from "./credentialService";

let users: IUser[] = [
    {
        id: 1,
        name: "Leonel Jesus",
        email: "leonel@test.com",
        birthdate: new Date("1998-05-20"),
        nDni: 12345678,
        credentialsId: 1
    },
    {
        id: 2,
        name: "María García",
        email: "maria@test.com",
        birthdate: new Date("1995-12-10"),
        nDni: 12345678,
        credentialsId: 2
    }
];
let id: number = 1;

export const getUsersService = async ():Promise<IUser[]> => {
    return users;
}

export const getUserByIdService = async (id: number)  => {
    return users.find(user => user.id === id);
}

export const createUserService = async (userData: UserDto): Promise<IUser> => {
    const credentialsId = await createCredentialsService(userData.username, userData.password);
    const newUser: IUser = {
        id: id++,
        name: userData.name,
        email: userData.email,
        birthdate: userData.birthdate,
        nDni: userData.nDni,
        credentialsId: credentialsId
    }
    users.push(newUser);
    return newUser;
}