import {Updater} from "../../interfaces/dao/Updater";
import {UserDto} from "../../dto/UserDto";

class UserUpdater implements Updater {

    private userDto: UserDto;


    constructor(userDto: UserDto) {
        this.userDto = userDto;
    }

    updateInDatabase(): boolean {
        return null;
    }
}

export {UserUpdater};
