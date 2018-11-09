import MongoDBConnector from "../MongoDBConnector";
import DBSettings from "../../DBSettings";

test("should connect to mongod", (done) => {
    const settings = new DBSettings();
    settings.host = "localhost";
    settings.port = "27017";
    settings.name = "tests";

    const connector = new MongoDBConnector(settings);

    (async () => {
        await connector.connect();
        done();
    })();
});
