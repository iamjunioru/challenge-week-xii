import { StatusCodes } from "http-status-codes";
import  {Request,Response} from "express";
import {Tutor} from "../../models/Tutor";

export async function deleteTutor(req:Request,res:Response) {

    try {

        const id = req.params.id;
        const tutor = await Tutor.findById(id);

        if(!tutor) {
            res.status(StatusCodes.BAD_REQUEST).json({msg: `No tutor with id ${id}`});
        }
        if (tutor.pets.length > 0) {
            res.status(StatusCodes.BAD_REQUEST).json({msg:`Tutor have an pet delete this first`})
        }

        await tutor.deleteOne()
        res.status(StatusCodes.OK).json({msg:`Tutor has been deleted`});
        
    } catch (e:any) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({msg:`${e}`});
        
    }
    
};