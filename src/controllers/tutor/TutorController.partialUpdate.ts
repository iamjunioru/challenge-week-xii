import { Request, Response } from "express";
import { tutorPartialUpdateValidator } from "../../middlewares/validators/tutorPartialUpdateValidator";
import { partialUpdateTutorService } from "../../services/tutor/TutorService.partialUpdate";

export async function partialUpdateTutorController(req: Request, res: Response) {
  const tutorId = req.params.id;
  const updates = req.body;

  await tutorPartialUpdateValidator(req, res, async () => {
    await partialUpdateTutorService(tutorId, updates, res);
  });
}
