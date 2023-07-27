import { Response, Request, NextFunction } from "express";
import { tutorFullUpdateValidationSchema } from "../../models/validators/tutor/TutorValidator.fullUpdate";

export async function tutorPutValidator(
    req: Request,
    _res: Response,
    next: NextFunction
) { 
    await tutorFullUpdateValidationSchema.validateAsync(req.body);
    next();
}