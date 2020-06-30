import express, {Application} from "express";
import {App} from "./interfaces/App";
import {ExpressExtensions} from "./types/express";
import ExpressServer = ExpressExtensions.ExpressServer;
import {MongoConnector} from "./db/MongoConnector";


class AppImpl implements App {
    public run(port: number): ExpressServer {

        new MongoConnector(process.env.MONGO_URI).connect();

        const app: Application = express();

        app.get('/', (req, res, next): void => {
            res.json({
                message: 'Hello World!'
            })
        });

        return app.listen(port, (): void => {
            console.log(`App is running on port ${port}`)
        })
    }
}

export {AppImpl};
