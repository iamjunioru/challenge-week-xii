import { Request, Response, NextFunction } from "express";
import { tutorCreateValidationSchema } from "../../models/validators/tutor/TutorValidator.create";

export async function tutorCreateValidator(
    req: Request,
    _res: Response,
    next: NextFunction
) {
    await tutorCreateValidationSchema.validateAsync(req.body);
    next();
}
