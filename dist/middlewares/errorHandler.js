"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomError = exports.errorHander = void 0;
class CustomError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
    }
}
exports.CustomError = CustomError;
const errorHander = (err, req, res) => {
    let customError = err;
    const statusCode = req.statusCode ? req.statusCode : 500;
    if (!(err instanceof CustomError)) {
        customError = new CustomError(err.message || "Something went wrong", 500);
    }
    res.status(customError.statusCode).send(customError);
    // res.status(statusCode).json({
    // 	success: false,
    // 	message: err.message,
    // 	stack: process.env.NODE_ENV === "development" ? err.stack : null,
    // });
};
exports.errorHander = errorHander;
