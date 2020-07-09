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
}, {timestamps: true})

interface UserDocument extends Document {
    email: string,
    password: string,
    firstName: string,
    lastName: string
}

const UserModelMongoose: Model<UserDocument> = model<UserDocument>('User', UserSchema);

export {UserModelMongoose, UserDocument};
