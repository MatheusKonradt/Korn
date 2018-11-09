import DBSettings from "./DBSettings";
import IDBCollection from "./IDBCollection";

export default abstract class DBConnector {
    protected settings: DBSettings;

    constructor(settings: DBSettings) {
        this.settings = settings;
    }

    public abstract connect(): Promise<void>;
    public abstract disconnect(): Promise<void>;
    public abstract getCollection(name: string): IDBCollection;
}
