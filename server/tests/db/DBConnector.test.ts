import {DBConnector} from "../../interfaces/db/DBConnector";
import {MongoConnector} from "../../db/MongoConnector";

const dbConnector: DBConnector = new MongoConnector(process.env.MONGO_URI);
const errorDBConnector: DBConnector = new MongoConnector('dsfdsfdsf');

describe('DBConnector test', () => {
    it('Should successfully connect to a database', done => {
        dbConnector.connect().then(callbackResult => {
            console.log('CALBACK RESULT' + callbackResult)
            expect(callbackResult).toBe(true)
            dbConnector.disconnect()
            done();
        });
    })

    it('Should fail to connect to a database', done => {
        errorDBConnector.connect().then(callbackResult => {
            expect(callbackResult).toBe(false)
            dbConnector.disconnect();
            done();
        });
    })

    it('Should return false on error', () => {
        expect(dbConnector.errorCallback({message: 'Valera', name: 'Dummy error'})).toBe(false);
    })

    it('Should return true on successfull connection', () => {
        expect(dbConnector.successCallback()).toBe(true);
    })

    it('Should go for the error flow', done => {
        dbConnector.errorCallback({message: 'Something', name: 'Something'});
        dbConnector.connect().then(callbackResult => {
            expect(callbackResult).toBe(false)
            dbConnector.disconnect();
            done();
        })
    })
})
