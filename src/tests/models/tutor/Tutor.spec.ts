import mongoose from 'mongoose';
import { Tutor } from '../../../models/Tutor';
import { connect, dropCollections, dropDB } from '../../helpers/db';

beforeAll(async () => {
    await connect();
});

afterEach(async () => {
    await dropCollections();
});

afterAll(async () => {
    await dropDB();
});

const tutor = {
    name: 'Jon',
    password: 'abcd-1234',
    phone: '11111111111',
    email: 'jon@jon.com',
    date_of_birth: new Date('2000-10-02 10:10'),
    zip_code: '65520130',
};

describe('Tutor model', () => {
    it('should successfully create a new tutor', async () => {
        const validTutor = tutor;

        const savedTutor = await Tutor.create(validTutor);

        expect(savedTutor).toHaveProperty('_id');
        expect(savedTutor.name).toEqual(validTutor.name);
        expect(savedTutor.email).toEqual(validTutor.email);
        expect(savedTutor.password).toEqual(validTutor.password);
        expect(savedTutor.phone).toEqual(validTutor.phone);
        expect(savedTutor.date_of_birth).toEqual(validTutor.date_of_birth);
        expect(savedTutor.zip_code).toEqual(validTutor.zip_code);
    });

    it('should not create tutors with the same email', async () => {
        let err;
        let savedTutor;
        const firstTutor = tutor;
        await Tutor.create(firstTutor);
        const secondTutor = Object.assign(tutor, { name: '' });

        try {
            savedTutor = await Tutor.create(secondTutor);
        } catch (error) {
            err = error;
        }

        expect(err).toBeInstanceOf(mongoose.Error.ValidationError);
    });

    it('should not create tutor missing a name', async () => {
        let err;
        let savedTutor;
        const tutorWithoutName = Object.assign(tutor, { name: '' });

        try {
            savedTutor = await Tutor.create(tutorWithoutName);
        } catch (error) {
            err = error;
        }

        expect(err).toBeInstanceOf(mongoose.Error.ValidationError);
    });

    it('should not create tutor missing an email', async () => {
        let err;
        let savedTutor;
        const tutorWithoutEmail = Object.assign(tutor, { email: '' });

        try {
            savedTutor = await Tutor.create(tutorWithoutEmail);
        } catch (error) {
            err = error;
        }

        expect(err).toBeInstanceOf(mongoose.Error.ValidationError);
    });

    it('should not create tutor missing a password', async () => {
        let err;
        let savedTutor;
        const tutorWithoutPassword = Object.assign(tutor, { password: '' });

        try {
            savedTutor = await Tutor.create(tutorWithoutPassword);
        } catch (error) {
            err = error;
        }

        expect(err).toBeInstanceOf(mongoose.Error.ValidationError);
    });

    it('should not create tutor missing a phone', async () => {
        let err;
        let savedTutor;
        const tutorWithoutPhone = Object.assign(tutor, { phone: '' });

        try {
            savedTutor = await Tutor.create(tutorWithoutPhone);
        } catch (error) {
            err = error;
        }

        expect(err).toBeInstanceOf(mongoose.Error.ValidationError);
    });

    it('should not create tutor missing a date_of_birth', async () => {
        let err;
        let savedTutor;
        const tutorWithoutDateOfBirth = Object.assign(tutor, {
            date_of_birth: '',
        });

        try {
            savedTutor = await Tutor.create(tutorWithoutDateOfBirth);
        } catch (error) {
            err = error;
        }

        expect(err).toBeInstanceOf(mongoose.Error.ValidationError);
    });

    it('should not create tutor missing a zip_code', async () => {
        let err;
        let savedTutor;
        const tutorWithoutZipCode = Object.assign(tutor, { zip_code: '' });

        try {
            savedTutor = await Tutor.create(tutorWithoutZipCode);
        } catch (error) {
            err = error;
        }

        expect(err).toBeInstanceOf(mongoose.Error.ValidationError);
    });
});
