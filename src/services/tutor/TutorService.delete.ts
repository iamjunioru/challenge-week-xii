import { deleteTutorRepository } from "../../repository/tutor/TutorRepository.delete";
import { getOneTutor } from "../../repository/tutor/TutorRepository.getOne";
import { findByIdTutor } from "../../repository/pet/PetRepository.findByIdTutor";
import { StatusCodes } from "http-status-codes";
import { Response } from "express";
import CustomError from "../../errors/CustomError";

export async function deleteTutorService(id: string, res:Response) {

    const tutor = await getOneTutor({ _id: id })

    if (!tutor) 
    throw new CustomError(`No tutor with id ${id}`, StatusCodes.BAD_REQUEST);
    

    const pets = await findByIdTutor(tutor._id.toString())

    if (!pets) {
        const isDeleted = await deleteTutorRepository(tutor._id.toString())
        if (isDeleted.deletedCount) return res.status(200).json({msg: `Tutor has deleted` })
    }
    throw new CustomError(`Tutor have an pet`, StatusCodes.BAD_REQUEST);
}