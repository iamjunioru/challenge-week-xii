import express from "express";
import { createTutorController } from "../controllers/tutor/TutorController.create";
import { deleteTutorController } from "../controllers/tutor/TutorController.delete";
import { hashTutorPassword } from "../middlewares/hashTutorPassword";
import { putTutorsController } from "../controllers/tutor/TutorController.fullUpdate";
import { getAllTutors } from "../controllers/tutor/TutorController.listAll";
import { partialUpdateTutorController } from "../controllers/tutor/TutorController.partialUpdate";
import { validatePayload } from "../middlewares/validatePayload";
import { tutorCreateValidationSchema } from "../models/validators/tutor/TutorValidator.create";
import { tutorPartialUpdateValidationSchema } from "../models/validators/tutor/TutorValidator.partialUpdate";
import { tutorFullUpdateValidationSchema } from "../models/validators/tutor/TutorValidator.fullUpdate";
import { authenticateTutor } from "../middlewares/authenticator";
import { formatDate } from "../middlewares/formatDate";

const route = express.Router();

route.get("/tutors", authenticateTutor, getAllTutors);
route.post(
    "/tutor",
    validatePayload(tutorCreateValidationSchema),
    formatDate,
    hashTutorPassword,
    createTutorController
);
route.put(
    "/tutor/:id",
    authenticateTutor,
    validatePayload(tutorFullUpdateValidationSchema),
    formatDate,
    putTutorsController
);
route.patch(
    "/tutor/:id",
    authenticateTutor,
    validatePayload(tutorPartialUpdateValidationSchema),
    formatDate,
    partialUpdateTutorController
);
route.delete(
    "/tutor/:id",
    authenticateTutor,
    deleteTutorController
    );

export { route };
