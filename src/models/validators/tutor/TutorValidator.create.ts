import Joi from "joi";

export const tutorCreateValidationSchema = Joi.object({
    name: Joi.string().required(),
    password: Joi.string().required(),
    phone: Joi.string().pattern(/[0-9](11)/),
    email: Joi.string().email({ minDomainSegments: 2 }).required(),
    date_of_birth: Joi.date().required(),
});
