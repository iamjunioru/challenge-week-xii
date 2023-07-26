import { StatusCodes } from "http-status-codes";
import { Request, Response } from "express";
import { FullUpdateTutor } from "../../services/tutor/TutorService.fullUpdate";

const fullUpdateService = new FullUpdateTutor();

async function putTutors (req: Request, res: Response) {
    try {
        const idTutor = req.params.Id;
        const tutorData = req.body;

        const tutor = await fullUpdateService.putTutors(idTutor, tutorData);

        if(!tutor){
            res.status(StatusCodes.BAD_REQUEST).json({msg: `No tutor with id ${idTutor}`});
        }
        res.status(StatusCodes.OK).json({name: tutor?.name, 
            phone: tutor?.phone, 
            email: tutor?.email, 
            date_of_birth: tutor?.date_of_birth, 
            zip_code: tutor?.zip_code
        });
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({msg: error});
    }
};

export {putTutors}