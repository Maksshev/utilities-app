import {Dao} from "../../interfaces/dao/Dao";
import {UserModel} from "../../interfaces/models/UserModel";
import {UserDao} from "../../dao/user/UserDao";
import {UserModelImpl} from "../../models/UserModelImpl";
import {UserDto} from "../../dto/UserDto";
import {UserUpdater} from "../../dao/user/UserUpdater";
import {Updater} from "../../interfaces/dao/Updater";

const userDao: Dao<UserModel> = new UserDao();
const testUserModel: UserModel = new UserModelImpl();
const userDTO: UserDto = new UserDto();
userDTO.setFirstName('Valera');
userDTO.setLastName('Valera');
userDTO.setEmail('valera@gmail.com');
userDTO.setPassword('1qaz2WSX');

const userUpdater: Updater = new UserUpdater(userDTO);

describe('UserDao test', () => {
    it('Should return true when user succesfully added to db', () => {
        expect(userDao.add(testUserModel)).toBe(true);
    })

    it('Should return false when user failed to be added to db', () => {
        const userModel: UserModel = new UserModelImpl();
        expect(userDao.add(userModel)).toBe(false);
    })

    it('Should return User Model added in previous test', () => {
        const userModelFromDB = userDao.get(testUserModel.getID());
        expect(userModelFromDB.equals(testUserModel)).toBe(true);
    })

    it('Should return true when user is successfully deleted', () => {
        expect(userDao.remove(testUserModel.getID())).toBe(true);
    })

    it('Should return false when user was not deleted', () => {
        expect(userDao.remove(testUserModel.getID())).toBe(false);
    })

    it('Should return null when user not found in DB', () => {
        const userModelFromDB = userDao.get(testUserModel.getID());
        expect(userModelFromDB.equals(testUserModel)).toBe(null);
    })

    it('Should return false when trying to update a user in DB with invalid ID', () => {
        expect(userDao.update(userUpdater)).toBe(false);
        expect(userDao.get(testUserModel.getID()).equals(testUserModel)).toBe(true);
    })

    it ('Should return true when user model is updated correctly', () => {
        userDTO.setID('123456');
        expect(userDao.update(userUpdater)).toBe(true);
        expect(userDao.get('123456').equals(testUserModel)).toBe(false);
    })
})
