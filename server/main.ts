import {ServerImpl} from "./ServerImpl";
import {AppImpl} from "./AppImpl";
import {App} from "./interfaces/App";
import {Server} from "./interfaces/Server";

const app: App = new AppImpl();
const server: Server = new ServerImpl(app);

server.listen(parseInt(process.env.PORT) || 3000);
