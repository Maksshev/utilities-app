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

    it('Should return user token', () => {
        expect(user.getToken()).toBe('token')
    })

    it('Should return null if no token', () => {
        expect(user.getToken()).toBe(null);
    })

    it('Should set new first name', () => {
        user.setFirstName('Kolia');
        expect(user.getFirstName()).toBe('Kolia');
    })

    it('Should set new last name', () => {
        user.setLastName('Kolia');
        expect(user.getLastName()).toBe('Kolia');
    })

    it('Should set new email', () => {
        user.setEmail('Kolia@gmail.com');
        expect(user.getEmail()).toBe('Kolia@gmail.com');
    })

    it('Should set new password', () => {
        user.setPassword('1qwe2ASD');
        expect(user.getPassword()).toBe('1qwe2ASD');
    })

    it('Should set new token', () => {
        user.setToken('1qwe2ASD');
        expect(user.getToken()).toBe('1qwe2ASD');
    })
})
