import {DBConnector} from "../interfaces/db/DBConnector";
import mongoose from 'mongoose';

class MongoConnector implements DBConnector {
    private readonly uri: string;
    private error: Error;

    constructor(uri: string) {
        this.uri = uri;
    }

    async connect() {
        try {
            await mongoose.connect(
                this.uri,
                {
                    useNewUrlParser: true,
                    useCreateIndex: true,
                    useUnifiedTopology: true
                }
            );

            return this.successCallback();

        } catch (e) {
            return this.errorCallback(e);
        }
    }

    errorCallback(error: Error): boolean {
        this.error = error
        console.log('Error while connecting to DB');
        return false;
    }

    successCallback(): boolean {
        console.log('Connected to DB');
        this.error = null;
        return true;
    }

    disconnect(): void {
        mongoose.disconnect();
    }
}

export {MongoConnector}
