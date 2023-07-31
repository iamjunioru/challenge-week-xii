import { Pet } from "../../models/Pet";

export async function deletePet(id: string) {
  return Pet.deleteOne({_id:id})
};