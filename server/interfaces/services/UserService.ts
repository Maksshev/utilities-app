import {UserDto} from "../../dto/UserDto";
import {UserModel} from "../models/UserModel";
import {UserDtoOptions} from "../dto/options/UserDtoOptions";

interface UserService {
    getUser(id: string): UserModel;
    getUsers(userDto: UserDto): Promise<Array<UserModel>>;
    getAllUsers(): Array<UserModel>;
    updateUser(userModel: UserModel, userDto: UserDto): boolean;
    removeUser(userModel: UserModel): boolean;
    createUser(userDtoOptions: UserDtoOptions);
}

export {UserService}
