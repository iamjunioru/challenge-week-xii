import Joi from "joi";
import { ITutor } from "../../interfaces/ITutor";

export const tutorFullUpdateValidationSchema = Joi.object<ITutor>({
    name: Joi.string().required(),
    phone: Joi.string().pattern(/^\d{11}$/).required(),
    email: Joi.string().email({ minDomainSegments: 2 }).required(),
    date_of_birth: Joi.date().required(),
    zip_code: Joi.string().pattern(/^\d{8}/).required(),
});