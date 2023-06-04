const ClientErrorCodes = Object.freeze({
    BAD_REQUEST: 400, // user input is not valid
    UNAUTHORIZED: 401, // user is not authenticated
    FORBIDDEN: 403, // user is authenticated but not authorized to perform the requested action
    NOT_FOUND: 404, // resource not found
});

const ServerErrorCodes = Object.freeze({
    INTERNAL_SERVER_ERROR: 500, // unexpected error
    NOT_IMPLEMENTED: 501, // not implemented
});

const SuccessCodes = Object.freeze({
    OK: 200, // successful request
    CREATED: 201, // successful creation
    ACCEPTED: 202, // successful update
    NO_CONTENT: 204, // successful deletion
});

module.exports = {
    ClientErrorCodes,
    ServerErrorCodes,
    SuccessCodes,
};




