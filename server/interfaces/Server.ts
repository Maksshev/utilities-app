import {ExpressExtensions} from "../types/express";
import ExpressServer = ExpressExtensions.ExpressServer;

interface Server {
    listen(port: number): ExpressServer
}

export {Server};
