import { Request, Response } from "express";
import { createTutorService } from "../../services/tutor/TutorService.create";

export async function createTutorController(req: Request, res: Response) {
    return createTutorService(req.body, res);
}
