
export default interface IDBUpdate {
    set(data: object): IDBUpdate;
    unset(data: object): IDBUpdate;
    push(data: object): IDBUpdate;
    pull(data: object): IDBUpdate;
    inc(data: object): IDBUpdate;
}
