
class UserDto {
    private _firstName: string;
    private _lastName: string;
    private _email: string;
    private _password: string;
    private _id: string;


    getID() {
        return this._id;
    }

    getFirstName() {
        return this._firstName;
    }

    getLastName() {
        return this._lastName;
    }

    getEmail() {
        return this._email;
    }

    getPassword() {
        return this._password;
    }

    setFirstName(firstName: string) {
        this._firstName = firstName;
    }

    setLastName(lastName: string) {
        this._lastName = lastName;
    }

    setEmail(email: string) {
        this._email = email;
    }

    setPassword(password: string) {
        this._password = password;
    }

    setID(id: string) {
        this._id = id;
    }

    equals(userDto: UserDto) {
        return this.getID() === userDto.getID() &&
            this.getLastName() === userDto.getLastName() &&
            this.getFirstName() === userDto.getFirstName() &&
            this.getPassword() === userDto.getPassword() &&
            this.getEmail() === userDto.getEmail();
    }
}

export {UserDto}
