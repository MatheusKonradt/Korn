declare enum DatabaseType {
    Mongo,
}

declare enum ErrorCode {
    ErrUnexpectedInput = "ERR_UNEXPECTED_INPUT",
    ErrInternal = "ERR_INTERNAL",
    ErrBadRequest = "ERR_BAD_REQUEST",
}

declare enum SortingOrder {
    Asc = 1,
    Desc = -1,
}
