import { Request, Response } from "express";
import { FullUpdateTutor } from "../../services/tutor/TutorService.fullUpdate";

const fullUpdateTutor = new FullUpdateTutor();

async function putTutorsController (req: Request, res: Response) {
    const idTutor = req.params.id;
    const tutorData = req.body;

    const updateTutor = await fullUpdateTutor.putTutors(idTutor, tutorData);
    return res.status(200).json(updateTutor);

};

export {putTutorsController}