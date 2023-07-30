import { Request, Response } from 'express';
import * as tutorDB from '../../../repository/tutor/TutorRepository.partialUpdate';
import { partialUpdateTutorController } from '../../../controllers/tutor/TutorController.partialUpdate';
import { ITutor } from '../../../models/interfaces/ITutor';

describe('Tutor partial update controller', () => {
    let partialUpdateTutorMock: any;
    let req: Partial<Request>;
    let res: Partial<Response>;

    beforeAll(() => {
        partialUpdateTutorMock = jest
            .spyOn(tutorDB, 'partialUpdateTutor')
            .mockImplementation(jest.fn());

        req = {
            params: { id: 'any id' },
            body: { name: 'any name', email: 'updated@email.com' },
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

    it('should call service layer with valid data', async () => {
        await partialUpdateTutorController(req as Request, res as Response);

        expect(partialUpdateTutorMock).toBeCalled();
        expect(partialUpdateTutorMock).toHaveBeenCalledWith(
            'any id',
            req.body
        );
    });
});
