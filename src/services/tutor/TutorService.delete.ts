import { deleteTutorRepository } from "../../repository/tutor/TutorRepository.delete";
import { getOneTutor } from "../../repository/tutor/TutorRepository.getOne";
import { findByIdTutor } from "../../repository/pet/PetRepository.findone";

export async function deleteTutorService(id: string) {

    const tutor = await getOneTutor({ _id: id })

    if (!tutor) return { sucess: false, msg: `Tutor not exist` }

    const pets = await findByIdTutor(tutor._id.toString())

    if (!pets) {
        const isDeleted = await deleteTutorRepository(tutor._id.toString())
        console.log(isDeleted)
        if (isDeleted.deletedCount) return { sucess: true, msg: `Tutor has deleted` }
    }
    return { sucess: false, msg: `Tutor have an pet` }
}