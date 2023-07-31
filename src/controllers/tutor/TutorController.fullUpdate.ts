import { Request, Response } from 'express';
import { FullUpdateTutor } from '../../services/tutor/TutorService.fullUpdate';

const fullUpdateTutor = new FullUpdateTutor();

async function putTutorsController (req: Request, res: Response) {
    const idTutor = req.params.id;
    const tutorData = req.body;

    return await fullUpdateTutor.putTutors(idTutor, tutorData, res);

    

};

export {putTutorsController}