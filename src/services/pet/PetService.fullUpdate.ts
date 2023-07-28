import { PetRepository } from "../../repository/pet/PetRepository.fullUpdate";
import { IPet } from "../../models/interfaces/IPet";
import { Response } from "express";
import {pick} from "lodash";
import { Tutor } from "../../models/Tutor";



export class PetFullUpdateService{
    private petRepository: PetRepository;

    constructor(){
        this.petRepository = new PetRepository();
    }

    async updateFullPet(idPet: string, idTutor: string, petData: IPet){
        const tutor = await Tutor.findById(idTutor);

        if (!tutor) {
            throw new Error(` No tutor with id ${idTutor}`)
        }

        const pet = tutor.pets.id(idPet);

        if (!pet) {
            throw new Error(`No pet with id ${idPet}`);
        } 

        pet.name = petData.name;
        pet.species = petData.species;
        pet.carry = petData.carry;
        pet.weight = petData.weight;
        pet.date_of_birth = petData.date_of_birth;

        pet.set(petData);
        await tutor.save();

        return pet
    }

    async putPets(idPet: string, idTutor: string, petData: IPet, res: Response){
        await this.updateFullPet(idPet, idTutor, petData);
        
        const updatedPet = await this.petRepository.updatePet(idPet, idTutor, petData);

        const petWithoutId = pick(updatedPet, ['name', 'species', 'carry', 'weight', 'date_of_birth']);

        return res.status(200).json(petWithoutId);
    }
}