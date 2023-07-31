import { getOneTutor } from "../../repository/tutor/TutorRepository.getOne";

export async function getTutor(args: Object) {
    return getOneTutor(args);
}
