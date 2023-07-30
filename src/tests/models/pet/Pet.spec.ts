import mongoose from 'mongoose';
import { connect, dropCollections, dropDB } from '../../helpers/db';
import { Pet } from '../../../models/Pet';

beforeAll(async () => {
    await connect();
});

afterEach(async () => {
    await dropCollections();
});

afterAll(async () => {
    await dropDB();
});

const pet = {
    name: 'Lilo',
    species: 'Dog',
    carry: 'p',
    weight: 5,
    date_of_birth: new Date('1993-12-12 10:10'),
    tutorId: 'abc',
};

describe('Tutor model', () => {
    it('should successfully create a new pet', async () => {
        const validPet = pet;

        const savedPet = await Pet.create(validPet);

        expect(savedPet).toHaveProperty('_id');
        expect(savedPet.name).toEqual(validPet.name);
        expect(savedPet.species).toEqual(validPet.species);
        expect(savedPet.carry).toEqual(validPet.carry);
        expect(savedPet.weight).toEqual(validPet.weight);
        expect(savedPet.date_of_birth).toEqual(validPet.date_of_birth);
        expect(savedPet.tutorId).toEqual(validPet.tutorId);
    });

    it('should not create pet missing the name', async () => {
        let err;
        let savedPet;
        const petWithoutName = Object.assign(pet, { name: '' });

        try {
            savedPet = await Pet.create(petWithoutName);
        } catch (error) {
            err = error;
        }

        expect(err).toBeInstanceOf(mongoose.Error.ValidationError);
    });

    it('should not create pet missing the species', async () => {
        let err;
        let savedPet;
        const petWithoutSpecies = Object.assign(pet, { species: '' });

        try {
            savedPet = await Pet.create(petWithoutSpecies);
        } catch (error) {
            err = error;
        }

        expect(err).toBeInstanceOf(mongoose.Error.ValidationError);
    });

    it('should not create pet missing a password', async () => {
        let err;
        let savedPet;
        const petWithoutCarry = Object.assign(pet, { carry: '' });

        try {
            savedPet = await Pet.create(petWithoutCarry);
        } catch (error) {
            err = error;
        }

        expect(err).toBeInstanceOf(mongoose.Error.ValidationError);
    });

    it('should not create pet missing the weight', async () => {
        let err;
        let savedPet;
        const petWithoutWeight = Object.assign(pet, { weight: '' });

        try {
            savedPet = await Pet.create(petWithoutWeight);
        } catch (error) {
            err = error;
        }

        expect(err).toBeInstanceOf(mongoose.Error.ValidationError);
    });

    it('should not create pet missing the date_of_birth', async () => {
        let err;
        let savedPet;
        const petWithoutDateOfBirth = Object.assign(pet, {
            date_of_birth: '',
        });

        try {
            savedPet = await Pet.create(petWithoutDateOfBirth);
        } catch (error) {
            err = error;
        }

        expect(err).toBeInstanceOf(mongoose.Error.ValidationError);
    });

    it('should not create pet missing a tutor ID', async () => {
        let err;
        let savedPet;
        const petWithoutTutorId = Object.assign(pet, { tutorId: '' });

        try {
            savedPet = await Pet.create(petWithoutTutorId);
        } catch (error) {
            err = error;
        }

        expect(err).toBeInstanceOf(mongoose.Error.ValidationError);
    });
});
