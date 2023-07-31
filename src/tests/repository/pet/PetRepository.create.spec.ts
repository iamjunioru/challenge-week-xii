import { IPet } from '../../../models/interfaces/IPet';
import * as petDB from '../../../repository/pet/PetRepository.create';
import { isAPet } from '../../helpers/isAPet';

describe('Tutor creation repository layer', () => {
    beforeAll(() => {
        jest.spyOn(petDB, 'createPet').mockImplementation(
            jest.fn().mockImplementation((pet: any) => {
                if (!isAPet(pet)) {
                    throw new Error();
                }
                return pet;
            })
        );
    });

    afterAll(() => {
        jest.clearAllMocks();
    });

    it('should create a new pet when valid data is passed', async () => {
        let err;
        const validPet = {
            name: 'Lilo',
            species: 'Dog',
            carry: 'p',
            weight: 5,
            date_of_birth: new Date('1993-12-12 10:10'),
            tutorId: 'abc',
        };

        try {
            await petDB.createPet(validPet as IPet);
        } catch (error) {
            err = error;
        }

        expect(petDB.createPet).toReturnWith(validPet);
    });

    it('should throw when invalid data is passed', async () => {
        let err;
        const invalidPet = {
            name: 'Lilo',
            species: 'Dog',
            carry: 'p',
            weight: 5,
        };

        try {
            await petDB.createPet(invalidPet as IPet);
        } catch (error) {
            err = error;
        }

        expect(petDB.createPet).toThrow();
    });
});
