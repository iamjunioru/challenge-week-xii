import Joi from "joi";

export const loginValidationSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
});
