import {Identifiable} from "../util/Identifiable";

interface UserModel extends Identifiable {
    getFirstName(): string;
    getLastName(): string;
    getEmail(): string;
    getPassword(): string;
    getToken(): string,
    isAuth(): boolean;
    logIn(): boolean;
    equals(userMode: UserModel): boolean,
    setFirstName(firstName: string): void;
    setLastName(lastName: string): void;
    setEmail(email: string): void;
    setPassword(password: string): void;
    setToken(token: string): void;
}

export {UserModel}
