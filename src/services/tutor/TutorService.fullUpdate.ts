import { TutorRepositoryFullUpdate } from "../../repository/tutor/TutorRepository.fullUpdate";
import{ pick } from "lodash";
import { Response } from "express";


export class FullUpdateTutor{
    res: Response;
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


        const updateTutor = await this.tutorRepositoryFullUpdate.updateTutor(id, tutorData);
        
        const tutorWithoutPasswordId = pick(updateTutor, ['name', 'phone', 'email', 'date_of_birth', 'zip_code']);
        
        return tutorWithoutPasswordId;

    }
}