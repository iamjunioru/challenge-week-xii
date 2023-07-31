import  {Request,Response} from "express";
import { deleteTutorService } from "../../services/tutor/TutorService.delete";

export async function deleteTutorController(req:Request,res:Response) {
    const id = req.params.id;
    await deleteTutorService(id,res)
};