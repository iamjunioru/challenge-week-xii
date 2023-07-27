import express from "express";
import { createTutorController } from "../controllers/tutor/TutorController.create";
import { hashTutorPassword } from "../middlewares/hashTutorPassword";
import { putTutorsController } from "../controllers/tutor/TutorController.fullUpdate";
import { getAllTutors } from "../controllers/tutor/TutorController.listAll";
import { partialUpdateTutorController } from "../controllers/tutor/TutorController.partialUpdate";
import { tutorPutValidator } from "../middlewares/validators/tutorFullUpdateValidator";
import { validatePayload } from "../middlewares/validatePayload";
import { tutorCreateValidationSchema } from "../models/validators/tutor/TutorValidator.create";
import { tutorPartialUpdateValidationSchema } from "../models/validators/tutor/TutorValidator.partialUpdate";


const route = express.Router();

route.get("/tutors", getAllTutors);
route.post(
    "/tutor",
    validatePayload(tutorCreateValidationSchema),
    hashTutorPassword,
    createTutorController
);

route.put(
  "/tutor/:id", 
  tutorPutValidator,
  putTutorsController);
route.patch(
  "/tutor/:id",
   partialUpdateTutorController);
route.patch("/tutor/:id",
    validatePayload(tutorPartialUpdateValidationSchema),
    partialUpdateTutorController);
route.delete("/tutor/:id");

export { route };
