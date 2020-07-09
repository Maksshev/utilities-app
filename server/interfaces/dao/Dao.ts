import {Updater} from "./Updater";

interface Dao<T> {
    get(id: string): T;
    remove(id: string): boolean;
    add(item: T): Promise<T>;
    update(updater: Updater): boolean;
}

export {Dao}
