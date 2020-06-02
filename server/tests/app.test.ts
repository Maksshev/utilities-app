import {App} from "../App";
import request from "supertest";
import {ExpressExtensions} from "../types/express";
import Server = ExpressExtensions.Server;

const app: App = new App();

describe('Hello world', () => {
    it('Should match Hello World json', () => {
        const server: Server = app.run(3000);
        return request(server)
            .get('/')
            .expect(200)
            .then(response => {
                expect(JSON.stringify(response.body))
                    .toEqual(JSON.stringify({
                    message: 'Hello World!'
                }))
                server.close();
            })
    })
})


