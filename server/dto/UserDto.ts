import {UserDtoOptions} from "../interfaces/dto/options/UserDtoOptions";
import {Identifiable} from "../interfaces/util/Identifiable";
import {Validatable} from "../interfaces/util/Validatable";
import {UserDocument} from "../models/mongoose/UserModelMongoose";

class UserDto implements Identifiable, Validatable {
    private _firstName: string;
    private _lastName: string;
    private _email: string;
    private _password: string;
    private _id: string;
    private readonly userDtoOptions: UserDtoOptions;

    constructor(options: UserDtoOptions) {
        this._firstName = options.firstName;
        this._lastName = options.lastName;
        this._email = options.email
        this._password = options.password;
        this._id = options._id;
        this.userDtoOptions = options;
    }

    getID(): string {
        return this._id;
    }

    getFirstName(): string {
        return this._firstName;
    }

    getLastName(): string {
        return this._lastName;
    }

    getEmail(): string {
        return this._email;
    }

    getPassword(): string {
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

    equals(userDto: UserDto): boolean {
        return this.getID() === userDto.getID() &&
            this.getLastName() === userDto.getLastName() &&
            this.getFirstName() === userDto.getFirstName() &&
            this.getPassword() === userDto.getPassword() &&
            this.getEmail() === userDto.getEmail();
    }

    //TODO: Refactor
    getSearchOptions(): UserDtoOptions {
        if (this.isValid()) {
            const that = this;
            return new class implements UserDtoOptions {
                _id: string;
                email: string;
                firstName: string;
                lastName: string;
                password: string;

                constructor() {
                    this._id = that.userDtoOptions._id;
                    this.email = that.userDtoOptions.email;
                    this.firstName = that.userDtoOptions.firstName;
                    this.lastName = that.userDtoOptions.lastName;
                    this.password = that.userDtoOptions.password;
                }
            }
        }
    }

    getUserDocument(): UserDocument {
        if (this.isValidForCreationInDB()) {
            return  {
                email: this._email,
                password: this._password,
                firstName: this._firstName,
                lastName: this._lastName
            } as UserDocument
        }
    }

    isValid(): boolean {
        const {email, firstName, lastName} = this.userDtoOptions;
        return Boolean(email || firstName || lastName);
    }

    isValidForCreationInDB(): boolean {
        const {email, firstName, lastName, password} = this.userDtoOptions;
        return Boolean(email && firstName && lastName && password);
    }
}

export {UserDto}
