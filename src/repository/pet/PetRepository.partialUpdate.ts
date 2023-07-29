import { IPet } from "../../models/interfaces/IPet";
import { Pet } from "../../models/Pet";

export async function partialUpdatePet(petId: string, updates: Partial<IPet>) {
  return Pet.findByIdAndUpdate(petId, updates, { new: true });
}
