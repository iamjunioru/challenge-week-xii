import express from "express";
import { validatePayload } from "../middlewares/validatePayload";
import { petValidationSchema } from "../models/validators/pet/PetValidationSchema";
import { createPetController } from "../controllers/pet/PetController.create";
import { putPetsController } from "../controllers/pet/PetController.fullUpdate";
import { authenticateTutor } from "../middlewares/authenticator";

const route = express.Router();

route.post(
    "/pet/:tutorId",
    authenticateTutor,
    validatePayload(petValidationSchema),
    createPetController
);
route.put(
    "/pet/:petId/tutor/:tutorId",
    authenticateTutor,
    validatePayload(petValidationSchema), 
    putPetsController
);
route.patch(
    "/pet/:petId/tutor/:tutorId" /* PATCH to update pet specific information */
);
route.delete("/pet/:petId/tutor/:tutorId");

export { route };
