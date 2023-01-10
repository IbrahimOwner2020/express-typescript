import { Request, Response } from "express";

class CustomError extends Error {
	statusCode: number;
	message!: string;

	constructor(message: string, statusCode: number) {
		super(message);
		this.statusCode = statusCode;
	}
}

const errorHander = (err: Error | CustomError, req: Request, res: Response) => {
	let customError = err;
	const statusCode = req.statusCode ? req.statusCode : 500;

	if (!(err instanceof CustomError)) {
		customError = new CustomError(
			err.message || "Something went wrong",
			500
		);
	}

	res.status((customError as CustomError).statusCode).send(customError);

	// res.status(statusCode).json({
	// 	success: false,
	// 	message: err.message,
	// 	stack: process.env.NODE_ENV === "development" ? err.stack : null,
	// });
};

export { errorHander, CustomError };
