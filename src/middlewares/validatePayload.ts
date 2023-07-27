import { Request, Response, NextFunction } from "express";
import Joi from "joi";

export function validatePayload(schema: Joi.ObjectSchema) {
    return async (req: Request, _res: Response, next: NextFunction) => {
        await schema.validateAsync(req.body);
        next();
    };
}
