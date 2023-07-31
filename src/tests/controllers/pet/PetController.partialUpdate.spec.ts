import { Request, Response } from 'express';
import * as petDB from '../../../repository/pet/PetRepository.partialUpdate';
import { partialUpdatePetController } from '../../../controllers/pet/PetController.partialUpdate';
import { IPet } from '../../../models/interfaces/IPet';

describe('Pet partial update controller', () => {
    let partialUpdatePetMock: any;
    let req: Partial<Request>;
    let res: Partial<Response>;

    beforeAll(() => {
        partialUpdatePetMock = jest
            .spyOn(petDB, 'partialUpdatePet')
            .mockImplementation(jest.fn());

        req = {
            params: { petId: 'any petId' },
            body: { name: 'any name', date_of_birth: '1999-01-01 10:10'},
        };

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

    it('should call service layer with valid data', async () => {
        await partialUpdatePetController(req as Request, res as Response);

        expect(partialUpdatePetMock).toBeCalled();
        expect(partialUpdatePetMock).toHaveBeenCalledWith(
            'any petId',
            req.body
        );
    });
});
