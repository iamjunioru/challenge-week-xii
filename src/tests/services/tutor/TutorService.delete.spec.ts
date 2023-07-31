import { v4 } from "uuid"
import { deleteTutorService } from "../../../services/tutor/TutorService.delete"
import { Response, response } from "express"
describe("tutorServiceDelete",()=>{
    test("should return an error if it doesn't find a tutor",()=>{
        const res = response
        deleteTutorService(v4(),res as Response)
        expect
    })
})