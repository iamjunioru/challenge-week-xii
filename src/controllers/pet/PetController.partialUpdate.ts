import { Request, Response } from "express";
import { partialUpdatePetService } from "../../services/pet/PetService.partialUpdate";

export async function partialUpdatePetController(req: Request, res: Response) {
  const petId = req.params.petId;
  const updates = req.body;

  await partialUpdatePetService(petId, updates, res);
}
