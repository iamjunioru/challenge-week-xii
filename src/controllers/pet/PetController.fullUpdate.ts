import { Request, Response } from 'express';
import { PetFullUpdateService } from '../../services/pet/PetService.fullUpdate';
import { IPet } from '../../models/interfaces/IPet';

const petFullUpdateService = new PetFullUpdateService();

async function putPetsController(req: Request, res: Response){
    const idTutor = req.params.tutorId;
    const idPet = req.params.petId;
    const petData: IPet = req.body;

    return await petFullUpdateService.putPets(idPet, idTutor, petData, res);
}

export{putPetsController}

