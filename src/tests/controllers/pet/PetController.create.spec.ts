import { Request, Response } from 'express';
import * as petServ from '../../../services/pet/PetService.create';
import { createPetController } from '../../../controllers/pet/PetController.create';
import { ITutor } from '../../../models/interfaces/ITutor';

describe('Pet creation controller', () => {
    let createPetMock: any;
    let req: Partial<Request>;
    let res: Partial<Response>;

    beforeAll(() => {
        createPetMock = jest
            .spyOn(petServ, 'createPetService')
            .mockImplementation(jest.fn());

        req = {
            params: { tutorId: 'abc' },
            body: {},
        };

        res = {
            status: jest.fn().mockImplementation((statusCode: number) => {
                return res;
            }),
            json: jest.fn().mockImplementation((tutor: ITutor) => {
                return res;
            }),
        };
    });

    afterAll(() => {
        jest.clearAllMocks();
    });

    it('should call service layer', async () => {
        await createPetController(req as Request, res as Response);

        expect(createPetMock).toBeCalled();
    });
});
