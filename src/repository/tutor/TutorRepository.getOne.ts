import { Tutor } from "../../models/Tutor";

export async function getOneTutor(args: Object) {
    return Tutor.findOne(args);
}
