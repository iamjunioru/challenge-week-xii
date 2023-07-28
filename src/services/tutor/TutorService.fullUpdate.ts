import { TutorRepositoryFullUpdate } from "../../repository/tutor/TutorRepository.fullUpdate";
import{ pick } from "lodash";
import { Response } from "express";
import { ITutor } from "../../models/interfaces/ITutor";


export class FullUpdateTutor{
    private tutorRepositoryFullUpdate: TutorRepositoryFullUpdate;

    constructor(){
        this.tutorRepositoryFullUpdate = new TutorRepositoryFullUpdate();
    }

    async putTutorsData(id: string, tutorData: ITutor, res: Response){

        const tutorExists = await this.tutorRepositoryFullUpdate.TutorExists(id);

        if (!tutorExists) {
            throw new Error(`Não há tutor com o ID ${id}`);
        }
    }

    async putTutors(id: string, tutorData: ITutor, res: Response) {

        await this.putTutorsData(id, tutorData, res);


        const updateTutor = await this.tutorRepositoryFullUpdate.updateTutor(id, tutorData);
        
        const tutorWithoutPasswordId = pick(updateTutor, ['name', 'phone', 'email', 'date_of_birth', 'zip_code']);
        
        return res.status(200).json(tutorWithoutPasswordId);

    }
}