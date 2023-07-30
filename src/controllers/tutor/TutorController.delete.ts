import  {Request,Response} from "express";
import { deleteTutorService } from "../../services/tutor/TutorService.delete";

async function deleteTutorController(req:Request,res:Response) {
try {
    const id = req.params.id;
    const result =await deleteTutorService(id)
    if(result.sucess) return res.status(202).json({messege:result.msg})
    return res.status(500).json({messege:result.msg})
} catch (e) {
    return res.status(500).json(`Internal error`)
}
};

export {deleteTutorController}