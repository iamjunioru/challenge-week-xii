import { Tutor } from "../../models/Tutor";
import { ITutor } from "../../models/interfaces/ITutor";

export async function createTutor(tutor: ITutor) {
    return await Tutor.create(tutor);
}
