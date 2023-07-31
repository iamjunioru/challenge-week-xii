import * as tutorDB from '../../../repository/tutor/TutorRepository.delete';
import * as findTutor from '../../../repository/tutor/TutorRepository.getOne';
import * as petDB from '../../../repository/pet/PetRepository.findByIdTutor';
import { Response } from 'express';
import { deleteTutorService } from '../../../services/tutor/TutorService.delete';
import CustomError from '../../../errors/CustomError';

describe('tutorServiceDelete', () => {
    let res: Partial<Response>;
    let deleteTutorMock: jest.SpyInstance;
    let findByIdPetMock: jest.SpyInstance;
    let getOneMock: jest.SpyInstance;
    let err: CustomError;

    beforeAll(() => {
        deleteTutorMock = jest.spyOn(tutorDB, 'deleteTutorRepository');
        findByIdPetMock = jest.spyOn(petDB, 'findByIdTutor');
        getOneMock = jest.spyOn(findTutor, 'getOneTutor');

        res = {
            status: jest.fn().mockImplementation((statusCode: number) => {
                return res;
            }),
            json: jest.fn().mockImplementation((args: any) => {
                return res;
            }),
        };
    });

    afterAll(() => {
        jest.clearAllMocks();
    });

    test('should delete tutor which does not have associated pets', async () => {
        const tutorId = 'abc';

        getOneMock.mockResolvedValue({ _id: tutorId });
        findByIdPetMock.mockResolvedValue(false);
        deleteTutorMock.mockResolvedValue({
            deletedCount: 1,
        });

        await deleteTutorService(tutorId, res as Response);

        expect(res.status).toHaveBeenCalledWith(204);
    });

    test('should throw an error when tutor is not found', async () => {
        const tutorId = 'abc';

        getOneMock.mockResolvedValue(false);

        try {
            await deleteTutorService(tutorId, res as Response);
        } catch (error) {
            err = error as CustomError;
        }

        expect(err.message).toBe(`No tutor with id ${tutorId}`);
        expect(err.statusCode).toBe(400);
    });

    test('should throw an error when tutor has associated pets', async () => {
        const tutorId = 'abc';

        getOneMock.mockResolvedValue({ _id: tutorId });
        findByIdPetMock.mockResolvedValue(true);

        try {
            await deleteTutorService(tutorId, res as Response);
        } catch (error) {
            err = error as CustomError;
        }

        expect(err.message).toBe(`Tutor have an pet`);
        expect(err.statusCode).toBe(400);
    });
});
