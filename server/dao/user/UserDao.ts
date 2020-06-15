import {Dao} from "../../interfaces/dao/Dao";
import {UserModel} from "../../interfaces/models/UserModel";
import {Updater} from "../../interfaces/dao/Updater";

class UserDao implements Dao<UserModel> {
    add(item: UserModel): boolean {
        return null;
    }

    get(id: string): UserModel {
        return null;
    }

    remove(id: string): boolean {
        return null;
    }

    update(id: string, updater: Updater): boolean {
        return updater.updateInDatabase();
    }
}

export {UserDao}
