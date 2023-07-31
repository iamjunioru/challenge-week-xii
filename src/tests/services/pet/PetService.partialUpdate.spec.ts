import { Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { IPet } from '../../../models/interfaces/IPet';
import * as petDB from '../../../repository/pet/PetRepository.partialUpdate';
import { partialUpdatePetService } from '../../../services/pet/PetService.partialUpdate';

describe('Pet Service partialUpdate', () => {
  let res: Partial<Response>;
  let partialUpdatePetMock: jest.SpyInstance;

  beforeEach(() => {
    partialUpdatePetMock = jest.spyOn(petDB, 'partialUpdatePet');
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis(),
    };
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should update a pet with valid data', async () => {
    const petId = 'any id';
    const updates: Partial<IPet> = {
      name: 'any name',
      species: 'any species',
      carry: 'any carry',
      weight: 5,
      date_of_birth: new Date('1990-01-01 10:10'),
    };

    partialUpdatePetMock.mockResolvedValue(updates);

    await partialUpdatePetService(petId, updates, res as Response);

    expect(partialUpdatePetMock).toHaveBeenCalledWith(petId, updates);

    expect(res.status).toHaveBeenCalledWith(StatusCodes.OK);
    expect(res.json).toHaveBeenCalledWith(updates);
  });

  it('should respond with 404 if no pet with the given id is found', async () => {
    const petId = 'any id';
    const updates: Partial<IPet> = {
      name: 'any name',
      species: 'any species',
      carry: 'any carry',
      weight: 5,
      date_of_birth: new Date('1990-01-01 10:10'),
    };

    partialUpdatePetMock.mockResolvedValue(null);

    await partialUpdatePetService(petId, updates, res as Response);

    expect(partialUpdatePetMock).toHaveBeenCalledWith(petId, updates);

    expect(res.status).toHaveBeenCalledWith(StatusCodes.NOT_FOUND);
    expect(res.json).toHaveBeenCalledWith({ msg: `No pet with id ${petId}` });
  });
});
