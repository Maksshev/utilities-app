import {Identifiable} from "../util/Identifiable";

interface UserModel extends Identifiable {
    getFirstName(): string;
    getLastName(): string;
    getEmail(): string;
    getPassword(): string;
    isAuth(): boolean;
    logIn(): boolean;
    equals(userMode: UserModel): boolean;
}

export {UserModel}
