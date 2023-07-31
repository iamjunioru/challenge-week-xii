import  {Request,Response} from "express";
import { deletePetService } from "../../services/pet/PetService.delete";
import { resolve } from "node:path/win32";

export async function deletePetController(req:Request,res:Response) {

    const petId = req.params.petId;
    const tutorId = req.params.tutorId;
    return deletePetService(petId ,tutorId,res)
    } 