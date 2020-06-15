import {Dao} from "../../interfaces/dao/Dao";
import {UserModel} from "../../interfaces/models/UserModel";
import {UserDao} from "../../dao/user/UserDao";
import {UserModelImpl} from "../../models/UserModelImpl";

const userDao: Dao<UserModel> = new UserDao();
const testUserModel: UserModel = new UserModelImpl();

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
})
