import { Pet } from "../../models/Pet";
export async function findByIdPet(id: string) {

    return Pet.findOne({ _id: id })

};