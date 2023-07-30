import { deletePet } from "../../repository/pet/PetRepository.delete";
import { Response } from "express";
import CustomError from "../../errors/CustomError";
import { StatusCodes } from "http-status-codes";
import { findByIdPet } from "../../repository/pet/PetRepository.findByIdPet";

export async function deletePetService(id: string, tutorId: string, res: Response) {

    const pet = await findByIdPet(id)

    if (!pet) throw new CustomError(`No pet with id ${id}`, StatusCodes.BAD_REQUEST)

    if (pet.tutorId == tutorId) {
        const isDeleted = await deletePet(pet._id.toString())
        if (isDeleted.deletedCount) return res.status(204).json({msg: `Pet has deleted` })
        throw new CustomError(`Pet not deleted`, StatusCodes.BAD_REQUEST)
    }
    throw new CustomError(`Pet not have an tutor`, StatusCodes.BAD_REQUEST)
}