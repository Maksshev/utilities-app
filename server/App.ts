import express, {Express} from "express";
import {ExpressExtensions} from "./types/express";
import Server = ExpressExtensions.Server;


class App {
    public run(port: number): Server {
        const app: Express = express();

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

export {App};
