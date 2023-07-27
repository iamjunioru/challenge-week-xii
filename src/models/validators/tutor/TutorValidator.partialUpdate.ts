import Joi from "joi";
import { ITutor } from "../../interfaces/ITutor";

export const tutorPartialUpdateValidationSchema = Joi.object<Partial<ITutor>>({
    name: Joi.string().pattern(/^[A-Za-z ]+$/),
    phone: Joi.string().pattern(/^\d{11}$/),
    email: Joi.string().email({ minDomainSegments: 2 }),
    date_of_birth: Joi.date(),
    zip_code: Joi.string().pattern(/^\d{8}/),
});
