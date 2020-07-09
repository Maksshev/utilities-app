import {NextFunction, Request, Response, Router} from "express";
import {UserDtoOptions} from "../interfaces/dto/options/UserDtoOptions";
import {UserService} from "../interfaces/services/UserService";
import {UserServiceImpl} from "../services/UserServiceImpl";
import {UserDto} from "../dto/UserDto";
import {UserDao} from "../dao/user/UserDao";
import {UserModel} from "../interfaces/models/UserModel";

const userRouter: Router = Router();
const userService: UserService = new UserServiceImpl(new UserDao());

userRouter.get('/user', async (req: Request, res: Response) => {
    const userDtoOptions: UserDtoOptions = req.query as unknown as UserDtoOptions;
    const users: Array<UserModel> = await userService.getUsers(new UserDto(userDtoOptions));

    if (users) {
        res.status(200).json(users)
    } else {
        res.status(400).json({
            error: 'Request is not valid, please check query parameters'
        })
    }
})

userRouter.post('/user', async (req: Request, res: Response, next: NextFunction) => {
    const userDtoOptions: UserDtoOptions = req.body as unknown as UserDtoOptions;
    const createdUser: UserModel = await userService.createUser(userDtoOptions);

    if (createdUser) {
        res.status(200).json(createdUser.getUserDocument());
    } else {
        res.status(400).json({
            error: 'Failed to create a user'
        })
    }
    next();
})

export {userRouter}
