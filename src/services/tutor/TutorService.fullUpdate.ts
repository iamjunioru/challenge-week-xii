import { TutorRepositoryFullUpdate } from "../../repository/tutor/TutorRepository.fullUpdate";


export class FullUpdateTutor{
    private tutorRepositoryFullUpdate: TutorRepositoryFullUpdate;

    constructor(){
        this.tutorRepositoryFullUpdate = new TutorRepositoryFullUpdate();
    }

    async putTutorsData(id: string, tutorData: any){

        const tutorExists = await this.tutorRepositoryFullUpdate.TutorExists(id);

        if (!tutorExists) {
            throw new Error(`Não há tutor com o ID ${id}`);
        }
    }

    async putTutors(id: string, tutorData: any) {

        await this.putTutorsData(id, tutorData);


        const updatedTutorService = await this.tutorRepositoryFullUpdate.updateTutor(id, tutorData);

        return updatedTutorService;

    }
}