import { IPet } from "../../models/interfaces/IPet";
import { createPet } from "../../repository/pet/PetRepository.create";
import { Response } from "express";
import { StatusCodes } from "http-status-codes";
import { getTutor } from "../tutor/TutorService.getOne";

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

    Object.assign(pet, { tutorId });

    const createdPet = await createPet(pet);

    res.status(StatusCodes.CREATED).json(createdPet);
}
