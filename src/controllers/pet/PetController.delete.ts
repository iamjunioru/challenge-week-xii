import  {Request,Response} from "express";
import { deletePetService } from "../../services/pet/PetService.delete";

export async function deletePetController(req:Request,res:Response) {

    try {
        const id = req.params.id;
        const result = await deletePetService(id,res)
        if(result.sucess) return res.status(202).json({messege:result.msg})
        return res.status(500).json({messege:result.msg})
    } catch (e) {
        return res.status(500).json(`Internal error`)
    }
}