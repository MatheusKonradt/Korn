import MongoDriver from "mongodb";
import DBConnector from "../DBConnector";
import IDBCollection from "../IDBCollection";
import MongoDBCollection from "./MongoDBCollection";

export default class MongoDBConnector extends DBConnector {
    private connection: any;
    private db: any;

    public async connect(): Promise<void> {
        const url = this.getConnectionURL();
        const client = new MongoDriver.MongoClient(url);
        this.connection = await client.connect();
        this.db = this.connection.db(this.settings.name);
    }

    public getCollection(name: string): IDBCollection {
        const collection: IDBCollection = new MongoDBCollection(this.db, name);
        return collection;
    }

    public async disconnect(): Promise<void> {
        await this.db.close();
    }

    public getConnectionURL(): string {
        let url = "mongodb://";

        if (this.settings.user) {
            url += this.settings.user;
            if (this.settings.pass) {
                url += `:${this.settings.pass}`;
            }
            url += "@";
        }

        url += `${this.settings.host}:${this.settings.port}/admin`;

        return url;
    }

}
