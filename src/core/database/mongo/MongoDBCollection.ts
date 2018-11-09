import IDBCollection from "../IDBCollection";
import DBModel from "../DBModel";
import IDBQuery from "../IDBQuery";
import IDBResults from "../IDBResults";
import IDBUpdate from "../IDBUpdate";
import MongoDBResults from "./MongoDBResults";

export default class MongoDBCollection implements IDBCollection {
    private name: string;
    private db: any;

    constructor(db: any, name: string) {
        this.db = db;
        this.name = name;
    }

    public deleteMany(query: IDBQuery): IDBResults {
        const results = new MongoDBResults();
        return results;
    }

    public deleteOne(query: IDBQuery): IDBResults {
        const results = new MongoDBResults();
        return results;
    }

    public findMany(query: IDBQuery): IDBResults {
        const results = new MongoDBResults();
        return results;
    }

    public findOne(query: IDBQuery): IDBResults {
        const results = new MongoDBResults();
        return results;
    }

    public insertMany(models: DBModel[]): IDBResults {
        const results = new MongoDBResults();
        return results;
    }

    public insertOne(model: DBModel): IDBResults {
        const results = new MongoDBResults();
        return results;
    }

    public updateMany(query: IDBQuery, update: IDBUpdate): IDBResults {
        const results = new MongoDBResults();
        return results;
    }

    public updateOne(query: IDBQuery, update: IDBUpdate): IDBResults {
        const results = new MongoDBResults();
        return results;
    }

    public upsertOne(query: IDBQuery, update: IDBUpdate, model: DBModel): IDBResults {
        const results = new MongoDBResults();
        return results;
    }

    private getMongoCollection() : any {
        return this.db.collection(this.name);
    }

}
