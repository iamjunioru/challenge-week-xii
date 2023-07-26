import { StatusCodes } from "http-status-codes";
import { Request, Response } from "express";
import { TutorService } from "../../services/tutor/TutorService.listAll";

const tutorService = new TutorService();

async function getAllTutors (req: Request, res: Response) {
    try {
        const tutors = await tutorService.getAllTutors();
        res.status(StatusCodes.OK).json({tutors});
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({msg: error});
    }
};

export {getAllTutors}
