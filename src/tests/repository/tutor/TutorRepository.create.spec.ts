import { ITutor } from '../../../models/interfaces/ITutor';
import * as tutorDB from '../../../repository/tutor/TutorRepository.create';
import { isATutor } from '../../helpers/isATutor';

describe('Tutor creation repository layer', () => {
    beforeAll(() => {
        jest.spyOn(tutorDB, 'createTutor').mockImplementation(
            jest.fn().mockImplementation((tutor: any) => {
                if (!isATutor(tutor)) {
                    throw new Error();
                }
                return tutor;
            })
        );
    });

    afterAll(() => {
        jest.clearAllMocks();
    });

    it('should create a new tutor when valid data is passed', async () => {
        let err;
        const validTutor = {
            name: 'Jon',
            password: 'abcd-1234',
            phone: '11111111111',
            email: 'jon@jon.com',
            date_of_birth: new Date('2000-10-02 10:10'),
            zip_code: '65520130',
        };

        try {
            await tutorDB.createTutor(validTutor as ITutor);
        } catch (error) {
            err = error;
        }

        expect(tutorDB.createTutor).toReturnWith(validTutor);
    });

    it('should throw when invalid data is passed', async () => {
        let err;
        const invalidTutor = {
            name: 'Jon',
            password: 'abcd-1234',
            phone: '11111111111',
            email: 'jon@jon.com',
            zip_code: '65520130',
        };

        try {
            await tutorDB.createTutor(invalidTutor as ITutor);
        } catch (error) {
            err = error;
        }

        expect(tutorDB.createTutor).toThrow();
    });
});
