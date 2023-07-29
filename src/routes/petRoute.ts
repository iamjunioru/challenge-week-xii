import express from "express";
import { validatePayload } from "../middlewares/validatePayload";
import { petValidationSchema } from "../models/validators/pet/PetValidationSchema";
import { createPetController } from "../controllers/pet/PetController.create";
import { putPetsController } from "../controllers/pet/PetController.fullUpdate";
import { authenticateTutor } from "../middlewares/authenticator";
import { partialUpdatePetController } from "../controllers/pet/PetController.partialUpdate";
import { petPartialUpdateValidationSchema } from "../models/validators/pet/PetValidator.partialUpdate";
import { formatDate } from "../middlewares/formatDate";

const route = express.Router();

route.post(
    "/pet/:tutorId",
    authenticateTutor,
    validatePayload(petValidationSchema),
    formatDate,
    createPetController
);
route.put(
    "/pet/:petId/tutor/:tutorId",
    authenticateTutor,
    validatePayload(petValidationSchema),
    formatDate,
    putPetsController
);
route.patch(
    "/pet/:petId/tutor/:tutorId",
    authenticateTutor,
    validatePayload(petPartialUpdateValidationSchema),
    formatDate,
    partialUpdatePetController
);
route.delete("/pet/:petId/tutor/:tutorId");

export { route };
