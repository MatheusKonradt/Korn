
export default interface IDBQuery {
    match(condition: object): IDBQuery;
    limit(value: number): IDBQuery;
    sortBy(field: string, order: SortingOrder): IDBQuery;
    select(fields: string[]): IDBQuery;
    join(collection: string, as: string, localField: string, foreignField: string): IDBQuery;
}
