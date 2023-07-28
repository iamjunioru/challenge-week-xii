import express from "express";
import "express-async-errors";
import errorHandler from "./middlewares/errorHandler";
import { route as tutorRoute } from "./routes/tutorRoute";
import { route as petRoute } from "./routes/petRoute";
import { route as authRoute } from "./routes/authRoute";
const app = express();

app.use(express.json());

app.use(authRoute);
app.use(tutorRoute);
app.use(petRoute);

app.use(errorHandler);

export { app };
