import express, {Application} from "express";
import {App} from "./interfaces/App";
import {ExpressExtensions} from "./types/express";
import ExpressServer = ExpressExtensions.ExpressServer;
import {MongoConnector} from "./db/MongoConnector";
import {userRouter} from "./controllers/UserController";


class AppImpl implements App {
    public run(port: number): ExpressServer {

        new MongoConnector(process.env.MONGO_URI).connect();

        const app: Application = express();

        //Middleware
        app.use(express.json());

        //TODO: Implement version manager through .env
        app.use('/v1', userRouter);

        app.get('/', (req, res): void => {
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
