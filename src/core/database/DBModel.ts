import IDBResults from "./IDBResults";
import IDBCollection from "./IDBCollection";

export default abstract class DBModel {
    private collection: IDBCollection;
    private data: object;

    constructor(collection: IDBCollection) {
        this.collection = collection;
        this.data = {};
    }

    public async save(): Promise<boolean> {
        return false;
    }
}
