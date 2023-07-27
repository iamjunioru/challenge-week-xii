import { IPet } from "../../models/interfaces/IPet";
import { Pet } from "../../models/Pet";

export async function createPet(pet: IPet) {
    return await Pet.create(pet);
}
