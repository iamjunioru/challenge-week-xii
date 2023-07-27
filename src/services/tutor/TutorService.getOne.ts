import { getOneTutor } from "../../repository/tutor/TutorRepository.getOne";

export async function getTutor(id: string) {
    return getOneTutor(id);
}
