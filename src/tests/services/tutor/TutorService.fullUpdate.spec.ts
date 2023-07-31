import { FullUpdateTutor } from '../../../services/tutor/TutorService.fullUpdate';
import { TutorRepositoryFullUpdate, updateTutor } from '../../../repository/tutor/TutorRepository.fullUpdate';
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { mock, when} from 'ts-mockito';


jest.mock('../repository/tutor/TutorRepository.fullUpdate');

describe('FullUpdateTutor', () => {
  let fullUpdateService: FullUpdateTutor;
  let req: Request;
  let res: Response;

  beforeEach(() => {
    fullUpdateService = new FullUpdateTutor();
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis(),
    } as unknown as Response;
  });

  it('should return status 200 for updated tutor', async () => {
    // Simulando que o tutor existe no banco de dados
    jest.spyOn(TutorRepositoryFullUpdate.prototype, 'TutorExists').mockResolvedValue(true);

    const id = '7b07ac3f-c5bd-4df6-bfbf-0cc0cddb81ab';

    const tutorData = {
      name: 'Marcia',
      password: '',
      phone: '35353535356',
      email: 'marcia@gmail.com',
      date_of_birth: new Date(1998, 10, 12),
      zip_code: '41875908',
    };

    const tutorWithoutPasswordId = {
      name: 'Marcia',
      phone: '35353535356',
      email: 'marcia@gmail.com',
      date_of_birth: new Date(1998, 10, 12),
      zip_code: '41875908',
    };

    // Simulando o comportamento do método updateTutor do repositório
    (updateTutor as jest.Mock).mockResolvedValue(tutorData);

    await fullUpdateService.putTutors(id, tutorData, res);

    expect(updateTutor).toHaveBeenCalledWith(id, tutorData);
    expect(res.status).toHaveBeenCalledWith(StatusCodes.OK);
    expect(res.json).toHaveBeenCalledWith(tutorWithoutPasswordId);
  });



  it('It should throw an error if tutor does not exist', async () => {
      const fullUpdateService = new FullUpdateTutor();
    
      const idTutor = "noTutorId";
    
      const tutorData = {
        name: "Marcia",
        password: "",
        phone: "35353535356",
        email: "marcia@gmail.com",
        date_of_birth: new Date(1998, 10, 12),
        zip_code: "41875908"
      }
    
      const responseMock: Response = mock<Response>();
      const tutorRepositoryFullUpdate = TutorRepositoryFullUpdate as jest.MockedClass<typeof TutorRepositoryFullUpdate>;
    
      tutorRepositoryFullUpdate.prototype.TutorExists.mockResolvedValue(false);
    
      when(responseMock.status(StatusCodes.BAD_REQUEST)).thenReturn(responseMock);
      when(responseMock.json()).thenReturn(responseMock);
    
      try {
        await fullUpdateService.putTutors(idTutor, tutorData, responseMock);
    
        fail("Expected an exception to be thrown");
      } catch (error: any) {
        expect(error.message).toBe(`Não há tutor com o ID ${idTutor}`);
      }
    });

});
