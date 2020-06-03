import express, {Application} from "express";
import {App} from "./interfaces/App";
import {ExpressExtensions} from "./types/express";
import ExpressServer = ExpressExtensions.ExpressServer;


class AppImpl implements App {
    public run(port: number): ExpressServer {
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
