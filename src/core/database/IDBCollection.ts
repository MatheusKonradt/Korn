import DBModel from "./DBModel";
import IDBQuery from "./IDBQuery";
import IDBResults from "./IDBResults";
import IDBUpdate from "./IDBUpdate";

export default interface IDBCollection {
    findMany(query: IDBQuery): IDBResults;
    findOne(query: IDBQuery): IDBResults;
    insertMany(models: DBModel[]): IDBResults;
    insertOne(model: DBModel): IDBResults;
    updateMany(query: IDBQuery, update: IDBUpdate): IDBResults;
    updateOne(query: IDBQuery, update: IDBUpdate): IDBResults;
    upsertOne(query: IDBQuery, update: IDBUpdate, model: DBModel): IDBResults;
    deleteMany(query: IDBQuery): IDBResults;
    deleteOne(query: IDBQuery): IDBResults;
}
