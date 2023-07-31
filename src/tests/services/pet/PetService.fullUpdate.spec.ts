import { PetFullUpdateService } from '../../../services/pet/PetService.fullUpdate';
import { IPet } from '../../../models/interfaces/IPet'; 
import { Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { mock, instance, when} from 'ts-mockito';
import { PetRepository, updatePet } from '../../../repository/pet/PetRepository.fullUpdate';
import CustomError from '../../../errors/CustomError'; 

describe('PetFullUpdateService - Tutor Not Found Test', () => {
  let petFullUpdateService: PetFullUpdateService;
  let petRepositoryMock: PetRepository;
  let responseMock: Response;

  beforeEach(() => {
    petRepositoryMock = mock(PetRepository);
    responseMock = mock<Response>();
    
    petFullUpdateService = mock(PetFullUpdateService);
  });

  afterAll(() => {
    jest.clearAllMocks();
  });

  it('should return status 400 if tutor is not found', async () => {
    const idPet = 'eef5ac10-2dc0-4fab-8a15-acb79c613f0c';
    const idTutor = 'noIdTutor';
    const petData: IPet = {
      name: "Rex",
      species: "Cat",
      carry: "p",
      weight: 4,
      date_of_birth: new Date(1998, 10, 12),
      tutorId: 'noIdTutor'
    };

    when(petFullUpdateService.updateFullPet(idPet, idTutor, petData, instance(responseMock)))
    .thenThrow(new CustomError(`No tutor with id ${idTutor}`, StatusCodes.BAD_REQUEST));

    try {
      await petFullUpdateService.putPets(idPet, idTutor, petData, instance(responseMock));
    } catch (error: any) {
      
      expect(error.message).toBe(`No tutor with id ${idTutor}`);
      expect(responseMock.status).toHaveBeenCalledWith(StatusCodes.BAD_REQUEST);
      expect(responseMock.json).toHaveBeenCalledWith({ error: `No tutor with id ${idTutor}` });
    }
  }, 40000);

  it('should return status 400 if pet is not found', async () => {
    const idPet = 'noIdPet';
    const idTutor = 'be96349a-2441-4ff8-95b2-0fee4f3b1724';
    const petData: IPet = {
      name: "Rex",
      species: "Cat",
      carry: "p",
      weight: 4,
      date_of_birth: new Date(1998, 10, 12),
      tutorId: 'be96349a-2441-4ff8-95b2-0fee4f3b1724'
    };

    when(petFullUpdateService.updateFullPet(idPet, idTutor, petData, instance(responseMock)))
    .thenThrow(new CustomError(`No pet with id ${idPet}`, StatusCodes.BAD_REQUEST));

    try {
      await petFullUpdateService.putPets(idPet, idTutor, petData, responseMock);
    } catch (error: any) {
      expect(error.message).toBe(`No pet with id ${idPet}`);
      expect(responseMock.status).toHaveBeenCalledWith(StatusCodes.BAD_REQUEST);
      expect(responseMock.json).toHaveBeenCalledWith({error: `No pet with id ${idPet}`});
    }
  }, 40000);
    
});




