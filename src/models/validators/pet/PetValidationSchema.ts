import Joi from "joi";
import { IPet } from "../../interfaces/IPet";

export const petValidationSchema = Joi.object<IPet>({
    name: Joi.string().required(),
    species: Joi.string().required(),
    carry: Joi.string()
        .pattern(/(p|m|g)/)
        .required(),
    weight: Joi.number().required(),
    date_of_birth: Joi.date().required(),
});
