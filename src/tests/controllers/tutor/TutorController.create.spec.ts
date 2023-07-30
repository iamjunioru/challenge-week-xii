import { Request, Response } from 'express';
import * as tutorDB from '../../../repository/tutor/TutorRepository.create';
import { createTutorController } from '../../../controllers/tutor/TutorController.create';
import { ITutor } from '../../../models/interfaces/ITutor';

describe('Tutor creation controller', () => {
    let createTutorMock: any;
    let req: Partial<Request>;
    let res: Partial<Response>;

    beforeAll(() => {
        createTutorMock = jest
            .spyOn(tutorDB, 'createTutor')
            .mockImplementation(jest.fn());

        req = {
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
        await createTutorController(req as Request, res as Response);

        expect(createTutorMock).toBeCalled();
    });
});
