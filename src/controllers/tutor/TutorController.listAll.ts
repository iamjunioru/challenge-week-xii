import { StatusCodes } from "http-status-codes";
import { Request, Response } from "express";
import { TutorService } from "../../services/tutor/TutorService.listAll";

const tutorService = new TutorService();

async function getAllTutors (req: Request, res: Response) {

    const tutors = await tutorService.getAllTutors();
    res.status(StatusCodes.OK).json({tutors});

};

export {getAllTutors}
