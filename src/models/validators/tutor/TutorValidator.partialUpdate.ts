import Joi from "joi";
import { ITutor } from "../../interfaces/ITutor";

export const tutorPartialUpdateValidationSchema = Joi.object<Partial<ITutor>>({
  name: Joi.string()
});
