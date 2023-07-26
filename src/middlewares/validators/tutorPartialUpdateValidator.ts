import { Request, Response, NextFunction } from "express";
import { tutorPartialUpdateValidationSchema } from "../../models/validators/tutor/TutorValidator.partialUpdate";
import { StatusCodes } from "http-status-codes";

export async function tutorPatchValidator(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    await tutorPartialUpdateValidationSchema.validateAsync(req.body);
    next();
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST).json({ message: "Invalid data", error });
  }
}
