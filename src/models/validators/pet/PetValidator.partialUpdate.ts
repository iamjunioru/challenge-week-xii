import Joi from "joi";
import { IPet } from "../../interfaces/IPet";

export const petPartialUpdateValidationSchema = Joi.object<IPet>({
    name: Joi.string().pattern(/^[A-Za-z ]+$/),
    species: Joi.string(),
    carry: Joi.string().pattern(/(p|m|g)/),
    weight: Joi.number(),
    date_of_birth: Joi.date(),
});
