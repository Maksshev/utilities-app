import {UserService} from "../interfaces/services/UserService";
import {UserModel} from "../interfaces/models/UserModel";
import {UserDto} from "../dto/UserDto";
import {UserDtoOptions} from "../interfaces/dto/options/UserDtoOptions";
import {UserDao} from "../dao/user/UserDao";
import {UserModelImpl} from "../models/UserModelImpl";

class UserServiceImpl implements UserService {
    private readonly userDao: UserDao;

    constructor(userDao: UserDao) {
        this.userDao = userDao;
    }

    getAllUsers(): Array<UserModel> {
        return undefined;
    }

    getUser(id: string): UserModel {
        return undefined;
    }

    async getUsers(userDto: UserDto): Promise<Array<UserModel>> {
        const searchOptions: UserDtoOptions = userDto.getSearchOptions();
        if (searchOptions) {
            return this.userDao.getUsers(searchOptions);
        }
        return null;
    }

    removeUser(userModel: UserModel): boolean {
        return null;
    }

    updateUser(userModel: UserModel, userDto: UserDto): boolean {
        return null;
    }

    createUser(userDtoOptions: UserDtoOptions): Promise<UserModel> {
        const userDto: UserDto = new UserDto(userDtoOptions);
        if (userDto.isValidForCreationInDB()) {
            return this.userDao.add(new UserModelImpl(userDto.getUserDocument()));
        }
        return null;
    }
}

export {UserServiceImpl}
