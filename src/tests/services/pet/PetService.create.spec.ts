import { Response } from 'express';
import { IPet } from '../../../models/interfaces/IPet';
import * as petDB from '../../../repository/pet/PetRepository.create';
import * as tutorDB from '../../../repository/tutor/TutorRepository.getOne';
import { createPetService } from '../../../services/pet/PetService.create';
import { isAPet } from '../../helpers/isAPet';

describe('Create a new pet', () => {
    let res: Partial<Response>;
    let createPetMock: any;
    let getOneTutorMock: any;

    beforeAll(() => {
        createPetMock = jest.spyOn(petDB, 'createPet').mockImplementation(
            jest.fn().mockImplementation((pet: object): object => {
                if (!isAPet(pet)) {
                    throw new Error('Invalid pet');
                }
                return pet;
            })
        );

        getOneTutorMock = jest.spyOn(tutorDB, 'getOneTutor').mockImplementation(
            jest.fn().mockImplementation((args: any) => {
                if (args._id !== 'abc') return false;
                return true;
            })
        );

        res = {
            status: jest.fn().mockImplementation((statusCode: number) => {
                return res;
            }),
            json: jest.fn().mockImplementation((pet: IPet) => {
                return res;
            }),
        };
    });

    afterAll(() => {
        jest.clearAllMocks();
    });

    it('should return a status of 201 when successfully create new pet', async () => {
        let err;
        const tutorId = 'abc';
        const pet = {
            name: 'Lilo',
            species: 'Dog',
            carry: 'p',
            weight: 5,
            date_of_birth: new Date('1993-12-12 10:10'),
        };

        try {
            await createPetService(tutorId, pet as IPet, res as Response);
        } catch (error) {
            err = error;
        }

        expect(createPetMock).toBeCalled();
        expect(createPetMock).toReturnWith(pet);
        expect(res.status).toHaveBeenCalledWith(201);
        expect(res.json).toHaveBeenCalledWith(pet);
    });

    it('should throw an error when invalid pet data is passed', async () => {
        let err;
        const tutorId = 'abc';
        const petMissingWeight = {
            name: 'Lilo',
            species: 'Dog',
            carry: 'p',
            date_of_birth: new Date('1993-12-12 10:10'),
        };

        try {
            await createPetService(
                tutorId,
                petMissingWeight as IPet,
                res as Response
            );
        } catch (error) {
            err = error;
        }

        expect(createPetMock).toBeCalled();
        expect(createPetMock).toThrow();
    });

    it('should throw an error when valid tutor is not found', async () => {
        let err;
        const tutorId = 'cde';
        const pet = {
            name: 'Lilo',
            species: 'Dog',
            carry: 'p',
            weight: 5,
            date_of_birth: new Date('1993-12-12 10:10'),
        };

        try {
            await createPetService(tutorId, pet as IPet, res as Response);
        } catch (error) {
            err = error;
        }

        expect(createPetMock).toBeCalled();
        expect(createPetMock).toThrow();
    });
});
