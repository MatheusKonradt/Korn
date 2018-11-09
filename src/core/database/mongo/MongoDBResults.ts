import IDBResults from "../IDBResults";

export default class MongoDBResults implements IDBResults {
    private rows: object[]|undefined;
    private count: number|undefined;
    private cursor: any;
    private document: object|null|undefined;

    public setCursor(cursor: any) {
        this.cursor = cursor;
        return this;
    }

    public setDocument(document: object|null): IDBResults {
        this.document = document;
        this.count = document === null ? 0 : 1;
        return this;
    }

    public async countRows(): Promise<number> {
        return 0;
    }

    public async forEach(cb: (model: IDBModel, index: number) => void): Promise<void> {
        return undefined;
    }

    public async toArray(): Promise<IDBModel[]> {
        return undefined;
    }
}
