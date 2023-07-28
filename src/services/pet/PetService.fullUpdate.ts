import { PetRepository } from "../../repository/pet/PetRepository.fullUpdate";
import { IPet } from "../../models/interfaces/IPet";
import { Response } from "express";
import {pick} from "lodash";



export class PetFullUpdateService{
    private petRepository: PetRepository;

    constructor(){
        this.petRepository = new PetRepository();
    }

    async putPets(idP: string, idT: string, petData: IPet, res: Response){ 
        
        const updatedPet = await this.petRepository.updatePet(idP, idT, petData);

        if(!updatedPet){
            throw new Error(`No pet with id ${idP} or tutor with id ${idT}`);
        }

        const petWithoutId = pick(updatedPet, ['name', 'species', 'carry', 'weight', 'date_of_birth']);

        return res.status(200).json(petWithoutId);
    }
}