import { Pet } from "../../models/Pet"
import { Tutor } from "../../models/Tutor";
import { IPet } from "../../models/interfaces/IPet";
import { ITutor } from "../../models/interfaces/ITutor";



export class PetRepository{
    async updatePet(idP: string, idT: string, petData: IPet) {
        const tutor = await Tutor.findById(idT);

        if (!tutor) {
            return false
        } 

        const pet = await tutor.pets.id(idP);

        if (!pet) {
            return false
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
}