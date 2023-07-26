import express from "express";
import "express-async-errors";
import { route as tutorRoute } from "./routes/tutorRoute";
import { route as petRoute } from "./routes/petRoute";
const app = express();

app.use(express.json());

app.use(tutorRoute);
app.use(petRoute);

export { app };
