import DBModel from "./DBModel";

export default interface IDBResults {
    toArray(): Promise<DBModel[]>;
    countRows(): Promise<number>;
    forEach(cb: (model: DBModel, index: number) => void): Promise<void>;
}
