import express from "express";
import { createTutorController } from "../controllers/tutor/TutorController.create";
import { hashTutorPassword } from "../middlewares/hashTutorPassword";
import { putTutors } from "../controllers/tutor/TutorController.fullUpdate";
import { getAllTutors } from "../controllers/tutor/TutorController.listAll";
import { partialUpdateTutorController } from "../controllers/tutor/TutorController.partialUpdate";
import { validatePayload } from "../middlewares/validators/validatePayload";
import { tutorCreateValidationSchema } from "../models/validators/tutor/TutorValidator.create";

const route = express.Router();

route.get("/tutors", getAllTutors);
route.post(
    "/tutor",
    validatePayload(tutorCreateValidationSchema),
    hashTutorPassword,
    createTutorController
);
route.put("/tutor/:id", putTutors);
route.patch("/tutor/:id", partialUpdateTutorController);
route.delete("/tutor/:id");

export { route };
