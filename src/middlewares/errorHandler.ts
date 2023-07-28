import { NextFunction, Request, Response } from "express";
import CustomError from "../errors/CustomError";
import Joi from "joi";

export default function errorHandler(
    err: Error,
    _req: Request,
    res: Response,
    _next: NextFunction
) {
    if (Joi.isError(err)) {
        return res.status(400).json({
            msg: err.message,
        });
    }

    if (err instanceof CustomError) {
        return res.status(err.statusCode).json({ msg: err.message });
    }

    return res.status(500).json({ msg: err.message });
}
