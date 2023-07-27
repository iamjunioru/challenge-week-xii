import express from "express";
import { tutorCreateValidator } from "../middlewares/validators/tutorCreateValidator";
import { createTutorController } from "../controllers/tutor/TutorController.create";
import { hashTutorPassword } from "../middlewares/hashTutorPassword";
import { putTutorsController } from "../controllers/tutor/TutorController.fullUpdate";
import { getAllTutors } from "../controllers/tutor/TutorController.listAll";
import { partialUpdateTutorController } from "../controllers/tutor/TutorController.partialUpdate";
import { tutorPutValidator } from "../middlewares/validators/tutorFullUpdateValidator";

const route = express.Router();

route.get("/tutors", getAllTutors);
route.post(
  "/tutor",
  tutorCreateValidator,
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
route.delete("/tutor/:id");

export { route };
