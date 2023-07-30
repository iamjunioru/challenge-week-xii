import { Response } from 'express';
import { ITutor } from '../../../models/interfaces/ITutor';
import * as tutorDB from '../../../repository/tutor/TutorRepository.create';
import { createTutorService } from '../../../services/tutor/TutorService.create';
import { isATutor } from '../../helpers/isATutor';

describe('Create a new tutor', () => {
    let res: Partial<Response>;
    let createTutorMock: any;

    beforeAll(() => {
        createTutorMock = jest.spyOn(tutorDB, 'createTutor').mockImplementation(
            jest.fn().mockImplementation((tutor: object): object => {
                if (!isATutor(tutor)) {
                    throw new Error('Invalid tutor');
                }
                return tutor;
            })
        );
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

    it('should return a status of 201 when successfully create new tutor', async () => {
        let err;
        const tutor = {
            name: 'Jon',
            password: 'abcd-1234',
            phone: '11111111111',
            email: 'jon@jon.com',
            date_of_birth: new Date('2000-10-02 10:10'),
            zip_code: '65520130',
        };

        try {
            await createTutorService(tutor as ITutor, res as Response);
        } catch (error) {
            err = error;
        }

        expect(createTutorMock).toBeCalled();
        expect(createTutorMock).toReturnWith(tutor);
        expect(res.status).toHaveBeenCalledWith(201);
        expect(res.json).toHaveBeenCalledWith(tutor);
    });

    it('should throw an error when invalid tutor data is passed', async () => {
        let err;
        const tutorMissingDateOfBirth = {
            name: 'Jon',
            password: 'abcd-1234',
            phone: '11111111111',
            email: 'jon@jon.com',
            zip_code: '65520130',
        };

        try {
            await createTutorService(
                tutorMissingDateOfBirth as ITutor,
                res as Response
            );
        } catch (error) {
            err = error;
        }

        expect(createTutorMock).toBeCalled();
        expect(createTutorMock).toThrow();
    });
});
