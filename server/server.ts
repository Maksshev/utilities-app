import {Person} from './Person'

let person: Person = new Person('Valera');

export class Server {
    private person: Person;

    constructor(person: Person) {
        this.person = person;
    }

    public getPersonsName(): string {
        return this.person.getName();
    }
}
