import {ExpressExtensions} from "../types/express";
import ExpressServer = ExpressExtensions.ExpressServer;

interface App {
    run(port: number): ExpressServer;
}

export {App};
