import { Request, Response } from "express";
import { createPetService } from "../../services/pet/PetService.create";
import { IPet } from "../../models/interfaces/IPet";

export async function createPetController(req: Request, res: Response) {
    const tutorId: string = req.params.tutorId;
    const pet: IPet = req.body;
    return await createPetService(tutorId, pet, res);
}
