import express from 'express';

const route = express.Router();

import { putTutors } from '../controllers/tutor/TutorController.fullUpdate';

route.get("/tutors", );
route.post("/tutor", );
route.put("/tutor/:id", putTutors);
route.patch("/tutor/:id", /* PATCH to update tutor specific information */);
route.delete("/tutor/:id", );

export { route };
