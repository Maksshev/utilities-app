import {UserDto} from "../../dto/UserDto";
import {UserUpdater} from "../../dao/user/UserUpdater";

const userDTO: UserDto = new UserDto();
userDTO.firstName = 'Valera';
userDTO.lastName = 'Valera';
userDTO.email = 'valera@gmail.com';
userDTO.password = '1qaz2WSX';

const userUpdater = new UserUpdater(userDTO);

describe('UserUpdater test', () => {

    it('Should return true if a user successfully updated in DB', () => {
        expect(userUpdater.updateInDatabase()).toBe(true);
    })

    it('Should return false if a user is not updated in DB', () => {
        const failedUserDTO: UserDto = new UserDto();
        const failedUserUpdater: UserUpdater = new UserUpdater(failedUserDTO);
        expect(failedUserUpdater.updateInDatabase()).toBe(false);
    })
})
