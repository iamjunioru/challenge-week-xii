import express from "express";
import { validatePayload } from "../middlewares/validatePayload";
import { petValidationSchema } from "../models/validators/pet/PetValidationSchema";
import { createPetController } from "../controllers/pet/PetController.create";
import { authenticateTutor } from "../middlewares/authenticator";
import { partialUpdatePetController } from "../controllers/pet/PetController.partialUpdate";
import { petPartialUpdateValidationSchema } from "../models/validators/pet/PetValidator.partialUpdate";

const route = express.Router();

route.post(
    "/pet/:tutorId",
    authenticateTutor,
    validatePayload(petValidationSchema),
    createPetController
);
route.put("/pet/:petId/tutor/:tutorId");
route.patch(
    "/pet/:petId/tutor/:tutorId",
    authenticateTutor,
    validatePayload(petPartialUpdateValidationSchema),
    partialUpdatePetController 
  );
route.delete("/pet/:petId/tutor/:tutorId");

export { route };
