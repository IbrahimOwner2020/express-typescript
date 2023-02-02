import express, { Application, NextFunction, Request, Response } from "express";
import dotenv from "dotenv";
// import { errorHander, CustomError } from "./middlewares/errorHandler";

dotenv.config();

const app: Application = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
	console.log("Hello World");
	res.send("Express + TypeScript Server is running");
});

// not found handler
app.use("*", (req: Request, res: Response, next: NextFunction) => {
	res.status(404).json({
		success: false,
		message: "Not Found",
	});
});

// error handler
// app.use(errorHander);

app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});
