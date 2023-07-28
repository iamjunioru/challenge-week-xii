import { IPet } from "../../models/interfaces/IPet";
import { createPet } from "../../repository/pet/PetRepository.create";
import { Response } from "express";
import { StatusCodes } from "http-status-codes";
import { getTutor } from "../tutor/TutorService.getOne";
import { partialUpdateTutor } from "../../repository/tutor/TutorRepository.partialUpdate";
import { ITutor } from "../../models/interfaces/ITutor";

export async function createPetService(
    tutorId: string,
    pet: IPet,
    res: Response
) {
    const desiredTutor = await getTutor({ _id: tutorId });

    if (!desiredTutor) {
        res.status(StatusCodes.NOT_FOUND).json({ msg: "Tutor not found" });
        return;
    }

    const createdPet = await createPet(pet);

    desiredTutor!.pets.push(createdPet);

    await partialUpdateTutor(tutorId, desiredTutor as ITutor);

    res.status(StatusCodes.CREATED).json(createdPet);
}
