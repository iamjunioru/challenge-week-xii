import express from 'express';

const route = express.Router();

route.post("/pet/:tutorId", );
route.put("/pet/:petId/tutor/:tutorId", );
route.patch("/pet/:petId/tutor/:tutorId", /* PATCH to update pet specific information */);
route.delete("/pet/:petId/tutor/:tutorId", );

export { route };
