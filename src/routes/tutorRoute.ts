import express from "express";
import { tutorCreateValidator } from "../middlewares/validators/tutorCreateValidator";
import { createTutorController } from "../controllers/tutor/TutorController.create";
import { hashTutorPassword } from "../middlewares/hashTutorPassword";
import { putTutors } from "../controllers/tutor/TutorController.fullUpdate";
import { getAllTutors } from "../controllers/tutor/TutorController.listAll";


const route = express.Router();

route.get("/tutors", getAllTutors);
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
