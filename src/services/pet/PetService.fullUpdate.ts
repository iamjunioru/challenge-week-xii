import { PetRepository } from "../../repository/pet/PetRepository.fullUpdate";
import { IPet } from "../../models/interfaces/IPet";
import { Response } from "express";
import {pick} from "lodash";
import { Tutor } from "../../models/Tutor";
import { Pet } from "../../models/Pet";
import { getTutor } from "../tutor/TutorService.getOne";
import { StatusCodes } from "http-status-codes";



export class PetFullUpdateService{
    private petRepository: PetRepository;

    constructor(){
        this.petRepository = new PetRepository();
    }

    async updateFullPet(idPet: string, idTutor: string, petData: IPet, res: Response){
      const tutorExist = await getTutor({ _id: idTutor });

      if (!tutorExist) {
        res.status(StatusCodes.NOT_FOUND).json({ msg: `No tutor with id ${idTutor}` });
        return;
      }

      const pet = await Pet.findById(idPet);

      if (!pet) {
        res.status(StatusCodes.NOT_FOUND).json({ msg: `No pet with id ${idTutor}`});
        return;
      }
    }

    async putPets(idPet: string, idTutor: string, petData: IPet, res: Response){
        await this.updateFullPet(idPet, idTutor, petData, res);
        const updatedPet = await this.petRepository.updatePet(idPet, idTutor, petData);

        const petWithoutId = pick(updatedPet, ['name', 'species', 'carry', 'weight', 'date_of_birth']);

        return res.status(200).json(petWithoutId);
    }
}