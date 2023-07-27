import { Request, Response } from "express";
import { partialUpdateTutorService } from "../../services/tutor/TutorService.partialUpdate";

export async function partialUpdateTutorController(req: Request, res: Response) {
  const tutorId = req.params.id;
  const updates = req.body;

  await partialUpdateTutorService(tutorId, updates, res);
}
