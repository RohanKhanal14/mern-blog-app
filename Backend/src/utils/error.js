export const errorHandler = (statusCode, message) => {
    const error = new Error();  //js default constuctor
    error.statusCode = statusCode;
    error.message = message;
    return error;
};