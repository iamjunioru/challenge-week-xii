import { Tutor } from "../../models/Tutor";
import { IPet } from "../../models/interfaces/IPet";

export class PetRepository{
    async updatePet(idPet: string, idTutor: string, petData: IPet) {
        return await Tutor.findById(idPet, idTutor, petData);
    }
}