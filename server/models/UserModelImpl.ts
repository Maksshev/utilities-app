import {UserModel} from "../interfaces/models/UserModel";
import {UserDocument} from "./mongoose/UserModelMongoose";

class UserModelImpl implements UserModel {

    private mongooseUserDocument: UserDocument;

    constructor(mongooseUserDocument: UserDocument) {
        this.mongooseUserDocument = mongooseUserDocument;
    }

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

    getToken(): string {
        return null;
    }

    equals(userModel: UserModelImpl): boolean {
        return Boolean(this.getID() === userModel.getID());
    }

    setEmail(email: string): void {
    }

    setFirstName(firstName: string): void {
    }

    setLastName(lastName: string): void {
    }

    setPassword(password: string): void {
    }

    setToken(token: string): void {
    }

    getUserDocument(): UserDocument {
        return this.mongooseUserDocument;
    }
}

export {UserModelImpl};
