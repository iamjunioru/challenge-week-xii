import express from "express";
import { validatePayload } from "../middlewares/validatePayload";
import { loginValidationSchema } from "../models/validators/auth/loginValidationSchema";
import { loginController } from "../controllers/auth/Login";

const route = express.Router();

route.post("/auth", validatePayload(loginValidationSchema), loginController);

export { route };
