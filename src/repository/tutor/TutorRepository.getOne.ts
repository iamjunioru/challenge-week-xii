import { Tutor } from "../../models/Tutor";

export async function getOneTutor(id: string) {
    return Tutor.findById(id);
}
