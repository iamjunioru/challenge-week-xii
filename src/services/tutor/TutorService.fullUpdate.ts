import { TutorRepositoryFullUpdate } from "../../repository/tutor/TutorRepository.fullUpdate";


export class FullUpdateTutor{
    private tutorRepositoryFullUpdate: TutorRepositoryFullUpdate;

    constructor(){
        this.tutorRepositoryFullUpdate = new TutorRepositoryFullUpdate();
    }

    async putTutors(id: string, tutorData: any){
        return this.tutorRepositoryFullUpdate.updateTutor(id, tutorData);
    }
}