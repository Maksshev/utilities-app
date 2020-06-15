import {Updater} from "./Updater";

interface Dao<T> {
    get(id: string): T;
    remove(id: string): boolean;
    add(item: T): boolean;
    update(id: string, updater: Updater): boolean;
}

export {Dao}
