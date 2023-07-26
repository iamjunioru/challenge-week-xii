import express from "express";
import { tutorCreateValidator } from "../middlewares/validators/tutorCreateValidator";
import { createTutorController } from "../controllers/tutor/TutorController.create";
import { hashTutorPassword } from "../middlewares/hashTutorPassword";
import { putTutors } from "../controllers/tutor/TutorController.fullUpdate";

const route = express.Router();

route.get("/tutors");
route.post(
    "/tutor",
    tutorCreateValidator,
    hashTutorPassword,
    createTutorController
);
route.put("/tutor/:id", putTutors);
route.patch("/tutor/:id" /* PATCH to update tutor specific information */);
route.delete("/tutor/:id");

export { route };
