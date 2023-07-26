import { Tutor } from "../../models/Tutor"


export class TutorRepository{

    async getAll(){
        return Tutor.find({}, '-password')
    }
}