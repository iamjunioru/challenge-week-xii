import { NextFunction, Request, Response } from "express";

export async function formatDate(
    req: Request,
    _res: Response,
    next: NextFunction
) {
    if (req.body.date_of_birth) {
        const date_of_birth = Date.parse(req.body.date_of_birth + " GMT");
        Object.assign(req.body, { date_of_birth });
    }
    next();
}
