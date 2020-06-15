import {UserModelImpl} from "../../models/UserModelImpl";
import {UserModel} from "../../interfaces/models/UserModel";

const user: UserModel = new UserModelImpl();

describe('UserModel test', () => {
    it('Should return user first name', () => {
        expect(user.getFirstName()).toEqual('Valera');
    })

    it('Should return user last name', () => {
        expect(user.getLastName()).toEqual('Valera');
    })

    it('Should return user email', () => {
        expect(user.getEmail()).toEqual('valera@gmail.com');
    })

    it('Should return user password', () => {
        expect(user.getPassword()).toEqual('1qaz2WSX');
    })

    it('Should return true if user successfully logged in', () => {
        expect(user.logIn()).toBe(true);
    })

    it('Should return false if error during login', () => {
        expect(user.logIn()).toBe(false);
    })

    it('Should return true for auth user', () => {
        expect(user.isAuth()).toBe(true);
    })

    it('Should return false for not auth user', () => {
        expect(user.isAuth()).toBe(false);
    })

    it('Should return user ID', () => {
        expect(user.getID()).toBe('12345');
    })

    it('Should return true when two User Models have same ID', () => {
        const newUser: UserModel = new UserModelImpl();
        expect(user.equals(newUser)).toBe(true);
    })

    it('Should return false when two User Models have different ID', () => {
        const newUser: UserModel = new UserModelImpl();
        expect(user.equals(newUser)).toBe(false);
    })
})
