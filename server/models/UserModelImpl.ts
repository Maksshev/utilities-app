import {UserModel} from "../interfaces/models/UserModel";

class UserModelImpl implements UserModel {

    getEmail(): string {
        return null;
    }

    getFirstName(): string {
        return null;
    }

    getLastName(): string {
        return null;
    }

    getPassword(): string {
        return null;
    }

    isAuth(): boolean {
        return null;
    }

    logIn(): boolean {
        return null;
    }

    getID(): string {
        return null;
    }

    equals(userModel: UserModelImpl): boolean {
        return Boolean(this.getID() === userModel.getID());
    }
}

export {UserModelImpl};
