import {AppImpl} from "../AppImpl";
import {App} from "../interfaces/App";
import request from "supertest";
import {ExpressExtensions} from "../types/express";
import ExpressServer = ExpressExtensions.ExpressServer;
import mongoose, {Mongoose} from 'mongoose';

const app: App = new AppImpl();

describe('Hello world', () => {
    it('Should match Hello World json', () => {
        const spy = jest.spyOn(mongoose, 'connect');
        spy.mockReturnValue(new Promise(() => {}));
        const server: ExpressServer = app.run(3000);
        expect(spy).toHaveBeenCalled();


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


