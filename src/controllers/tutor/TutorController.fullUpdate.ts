import { StatusCodes } from "http-status-codes";
import { Request, Response } from "express";
import { FullUpdateTutor } from "../../services/tutor/TutorService.fullUpdate";

const fullUpdateService = new FullUpdateTutor();

async function putTutorsController (req: Request, res: Response) {

    const idTutor = req.params.id;
    const tutorData = req.body;

    const tutor = await fullUpdateService.putTutors(idTutor, tutorData);

    if(!tutor){
        res.status(StatusCodes.BAD_REQUEST).json({msg: `No tutor with id ${idTutor}`});
    }
    res.status(StatusCodes.OK).json({name: tutor!.name, 
        phone: tutor!.phone, 
        email: tutor!.email, 
        date_of_birth: tutor!.date_of_birth, 
        zip_code: tutor!.zip_code
    });

};

export {putTutorsController}