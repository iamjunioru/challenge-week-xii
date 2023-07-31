import express from "express";
import "express-async-errors";
import errorHandler from "./middlewares/errorHandler";
import { route as tutorRoute } from "./routes/tutorRoute";
import { route as petRoute } from "./routes/petRoute";
import { route as authRoute } from "./routes/authRoute";
import swaggerUi from 'swagger-ui-express';
import swaggerDocs from './swagger.json';
const app = express();

app.use(express.json());

app.use(authRoute);
app.use(tutorRoute);
app.use(petRoute);

app.use(errorHandler);

app.use('/api', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

export { app };
