import {Server} from "./interfaces/Server";
import {ExpressExtensions} from "./types/express";
import {App} from "./interfaces/App";

class ServerImpl implements Server {
    private app: App;

    constructor(app: App) {
        this.app = app;
    }

    listen(port: number): ExpressExtensions.ExpressServer {
        return this.app.run(port);
    }
}

export {ServerImpl};
