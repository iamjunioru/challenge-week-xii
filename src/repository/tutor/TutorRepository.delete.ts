import { Tutor } from "../../models/Tutor";

export async function deleteTutorRepository(id: string) {
    return Tutor.deleteOne({ _id:id });
}
