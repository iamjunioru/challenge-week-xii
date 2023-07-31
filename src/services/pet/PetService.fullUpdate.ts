import { PetRepository } from '../../repository/pet/PetRepository.fullUpdate';
import { IPet } from '../../models/interfaces/IPet';
import { Response } from 'express';
import {pick} from 'lodash';
import { Pet } from '../../models/Pet';
import { getTutor } from '../tutor/TutorService.getOne';
import { StatusCodes } from 'http-status-codes';
import CustomError from '../../errors/CustomError';
export class PetFullUpdateService{
    findById(idPet: string): any {
      throw new Error('Method not implemented.');
    }
    private petRepository: PetRepository;

    constructor(){
        this.petRepository = new PetRepository();
    }

    async updateFullPet(idPet: string, idTutor: string, petData: IPet, res: Response){
      const tutorExist = await getTutor({ _id: idTutor });

      if (!tutorExist) {
        throw new CustomError(`No tutor with id ${idTutor}`, 
        StatusCodes.BAD_REQUEST);
      }

      const pet = await Pet.findById(idPet);

      if (!pet) {
        throw new CustomError(`No pet with id ${idPet}`, 
        StatusCodes.BAD_REQUEST);
      }
    }

    async putPets(idPet: string, idTutor: string, petData: IPet, res: Response){
        await this.updateFullPet(idPet, idTutor, petData, res);
        const updatedPet = await this.petRepository.updatePet(idPet, idTutor, petData);

        const petWithoutId = pick(updatedPet, ['name', 'species', 'carry', 'weight', 'date_of_birth']);

        return res.status(StatusCodes.OK).json(petWithoutId);
    }
}