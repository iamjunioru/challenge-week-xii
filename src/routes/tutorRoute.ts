import express from "express";
import { tutorCreateValidator } from "../middlewares/validators/tutorCreateValidator";
import { createTutorController } from "../controllers/tutor/TutorController.create";

const route = express.Router();

route.get("/tutors");
route.post("/tutor", tutorCreateValidator, createTutorController);
route.put("/tutor/:id");
route.patch("/tutor/:id" /* PATCH to update tutor specific information */);
route.delete("/tutor/:id");

export { route };
