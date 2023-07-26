import { Tutor } from "../../models/Tutor";
import { ITutor } from "../../models/interfaces/ITutor";

export async function partialUpdateTutor(tutorId: string, updates: ITutor) {
  return await Tutor.findByIdAndUpdate(tutorId, updates, { new: true });
}
