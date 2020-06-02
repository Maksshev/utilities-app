import {Server} from "../server";
import {Person} from "../Person";

describe('Server class', () => {
    it('Should return Valera', () => {
        var server = new Server(new Person('Valera'));
        expect(server.getPersonsName()).toBe('Valera');
    })
});


