import express from "express";
import { tutorCreateValidator } from "../middlewares/validators/tutorCreateValidator";
import { createTutorController } from "../controllers/tutor/TutorController.create";
import { hashTutorPassword } from "../middlewares/hashTutorPassword";
import { partialUpdateTutorController } from "../controllers/tutor/TutorController.partialUpdate";

const route = express.Router();

route.get("/tutors");
route.post(
  "/tutor",
  tutorCreateValidator,
  hashTutorPassword,
  createTutorController
);
route.put("/tutor/:id");
route.patch(
    "/tutor/:id",
     partialUpdateTutorController);
route.delete("/tutor/:id", );

export { route };
