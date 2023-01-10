"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const errorHandler_1 = require("./middlewares/errorHandler");
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.use(express_1.default.json());
app.get("/", (req, res) => {
    console.log("Hello World");
    res.send("Express + TypeScript Server is running");
});
// not found handler
app.use("*", (req, res, next) => {
    res.status(404).json({
        success: false,
        message: "Not Found",
    });
});
// error handler
app.use(errorHandler_1.errorHander);
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
