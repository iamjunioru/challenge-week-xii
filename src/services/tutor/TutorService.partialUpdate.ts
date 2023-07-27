import { Response } from "express";
import { StatusCodes } from "http-status-codes";
import { ITutor } from "../../models/interfaces/ITutor";
import { partialUpdateTutor } from "../../repository/tutor/TutorRepository.partialUpdate";

export async function partialUpdateTutorService(
  tutorId: string,
  updates: ITutor,
  res: Response
) {
  try {
    const updatedTutor = await partialUpdateTutor(tutorId, updates);
    res.status(StatusCodes.OK).json(updates);
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Failed to update tutor" });
  }
}
