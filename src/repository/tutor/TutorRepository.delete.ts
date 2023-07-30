import { Pet } from "../../models/Pet";

export async function findByIdTutor(id: string) {
  return Pet.findOne({tutorId: id })
};