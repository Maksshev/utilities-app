import {App} from "./app";

var app = new App();
app.run(parseInt(process.env.port) || 3000);
