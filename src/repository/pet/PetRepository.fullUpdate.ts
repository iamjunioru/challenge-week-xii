import { Pet } from '../../models/Pet';
import { IPet } from '../../models/interfaces/IPet';
export class PetRepository{
    async updatePet(idPet: string, idTutor: string, petData: IPet) {
        const pet = await Pet.findById(idPet);

        pet?.set(petData);
        await pet?.save();

        return pet;
    }
}