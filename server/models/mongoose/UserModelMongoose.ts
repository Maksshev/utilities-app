import {Document, model, Model, Schema} from "mongoose";

const UserSchema: Schema = new Schema({
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    firstName: {
        type: String,
        maxlength: 100
    },
    lastName: {
        type: String,
        maxlength: 100
    }
})

interface IUser extends Document {
    email: string,
    password: string,
    firstName: string,
    lastName: string
}

const UserModelMongoose: Model<IUser> = model<IUser>('User', UserSchema);

export {UserModelMongoose};
