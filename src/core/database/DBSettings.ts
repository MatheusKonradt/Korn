
export default class DBSettings {
    private _host: string|undefined;
    private _port: string|undefined;
    private _name: string|undefined;
    private _user: string|undefined;
    private _pass: string|undefined;

    get host(): string | undefined {
        return this._host;
    }

    set host(value: string | undefined) {
        this._host = value;
    }

    get port(): string | undefined {
        return this._port;
    }

    set port(value: string | undefined) {
        this._port = value;
    }

    get name(): string | undefined {
        return this._name;
    }

    set name(value: string | undefined) {
        this._name = value;
    }

    get user(): string | undefined {
        return this._user;
    }

    set user(value: string | undefined) {
        this._user = value;
    }

    get pass(): string | undefined {
        return this._pass;
    }

    set pass(value: string | undefined) {
        this._pass = value;
    }
}
