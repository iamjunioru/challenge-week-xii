import { Response } from "express";
import { StatusCodes } from "http-status-codes";
import { ITutor } from "../../models/interfaces/ITutor";
import { partialUpdateTutor } from "../../repository/tutor/TutorRepository.partialUpdate";

export async function partialUpdateTutorService(
  tutorId: string,
  updates: ITutor,
  res: Response
) {
  const updatedTutor = await partialUpdateTutor(tutorId, updates);

  if (!updatedTutor) {
    return res.status(StatusCodes.NOT_FOUND).json({ msg: `No tutor with id ${tutorId}` });
  }

  res.status(StatusCodes.OK).json(updates);
}
