import {UserDto} from "../../dto/UserDto";

const userDTO: UserDto = new UserDto();
userDTO.setFirstName('Valera');
userDTO.setLastName('Valera');
userDTO.setEmail('valera@gmail.com');
userDTO.setPassword('1qaz2WSX');
userDTO.setID('123456');

const emptyDTO = new UserDto();

const equalDTO = new UserDto();
equalDTO.setFirstName('Valera');
equalDTO.setLastName('Valera');
equalDTO.setEmail('valera@gmail.com');
equalDTO.setPassword('1qaz2WSX');
equalDTO.setID('123456');

describe('UserDto test', () => {
    it('Getters test', () => {
        expect(userDTO.getID()).toEqual('123456');
        expect(userDTO.getEmail()).toEqual('valera@gmail.com');
        expect(userDTO.getPassword()).toEqual('1qaz2WSX');
        expect(userDTO.getFirstName()).toEqual('Valera');
        expect(userDTO.getLastName()).toEqual('Valera');
    })

    it('UserDto equals test', () => {
        expect(userDTO.equals(equalDTO)).toBe(true);
        expect(equalDTO.equals(userDTO)).toBe(true);
        expect(userDTO.equals(emptyDTO)).toBe(false);
        expect(equalDTO.equals(emptyDTO)).toBe(false);
    })

    it('Setters test', () => {
        userDTO.setID('23456');
        expect(userDTO.getID()).toEqual('23456');
        userDTO.setFirstName('Kolia');
        expect(userDTO.getFirstName()).toEqual('Kolia');
        userDTO.setEmail('jki@jki.com');
        expect(userDTO.getEmail()).toEqual('jki@jki.com');
        userDTO.setPassword('123456');
        expect(userDTO.getPassword()).toEqual('123456');
        userDTO.setLastName('Kolia');
        expect(userDTO.getLastName()).toEqual('Kolia');
    })
})
