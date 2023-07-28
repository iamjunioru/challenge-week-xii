import { Response } from "express";
import { StatusCodes } from "http-status-codes";
import { IPet } from "../../models/interfaces/IPet";
import { partialUpdatePet } from "../../repository/pet/PetRepository.partialUpdate";

export async function partialUpdatePetService(
  petId: string,
  updates: Partial<IPet>,
  res: Response
) {
  const updatedPet = await partialUpdatePet(petId, updates);

  if (!updatedPet) {
    return res.status(StatusCodes.BAD_REQUEST).json({ msg: `No pet with id ${petId}` });
  }

  res.status(StatusCodes.OK).json(updates);
}

// for test :)
//    if (!updatedTutor) {
//        throw new CustomError(`No tutor with id ${tutorId}`, StatusCodes.BAD_REQUEST);
//    }
//
//    return updates;
//}
