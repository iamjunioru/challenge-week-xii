import { ITutor } from "../../models/interfaces/ITutor";
import { Response } from "express";
import { StatusCodes } from "http-status-codes";
import { createTutor } from "../../repository/tutor/TutorRepository.create";

export async function createTutorService(tutor: ITutor, res: Response) {
    const createdTutor = await createTutor(tutor);

    res.status(StatusCodes.CREATED).json(createdTutor);
}
