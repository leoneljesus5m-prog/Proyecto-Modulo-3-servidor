import IUser from "../interfaces/IUser";
import UserDto from "../dto/UserDto";
export declare const createUserService: (userData: UserDto) => Promise<IUser>;
export declare const getUserService: () => Promise<IUser[]>;
export declare const deleteUserService: (id: number) => Promise<void>;
//# sourceMappingURL=userService.d.ts.map