import { TutorRepository } from "../../repository/tutor/TutorRepository.listAll";

export class TutorService{

    private tutorRepository: TutorRepository;

    constructor(){
        this.tutorRepository = new TutorRepository();
    }


    async getAllTutors(){
        return this.tutorRepository.getAll();
    }
}