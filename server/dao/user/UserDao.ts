import {Dao} from "../../interfaces/dao/Dao";
import {UserModel} from "../../interfaces/models/UserModel";
import {Updater} from "../../interfaces/dao/Updater";
import {UserDtoOptions} from "../../interfaces/dto/options/UserDtoOptions";
import {UserModelMongoose, UserDocument} from "../../models/mongoose/UserModelMongoose";
import {UserModelImpl} from "../../models/UserModelImpl";

class UserDao implements Dao<UserModel> {
    async add(item: UserModel): Promise<UserModel> {
        try {
            const createdUser = await UserModelMongoose.create(item.getUserDocument())
            return new UserModelImpl(createdUser);
        } catch (e) {
        //TODO: Add logger here
            return null;
        }
    }

    get(id: string): UserModel {
        return null;
    }

    async getUsers(userOptions: UserDtoOptions): Promise<Array<UserModel>> {
        try {
            const users: Array<UserDocument> = await UserModelMongoose.find(userOptions).exec();
            return users.map((user: UserDocument) => new UserModelImpl(user));
        } catch (e) {
            //TODO: Logger here
            return null
        }
    }

    remove(id: string): boolean {
        return null;
    }

    update(updater: Updater): boolean {
        return updater.updateInDatabase();
    }
}

export {UserDao}
