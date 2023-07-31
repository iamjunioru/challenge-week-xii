import { Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { ITutor } from '../../../models/interfaces/ITutor';
import * as tutorDB from '../../../repository/tutor/TutorRepository.partialUpdate';
import { partialUpdateTutorService } from '../../../services/tutor/TutorService.partialUpdate';

describe('Tutor Service partialUpdate', () => {
  let res: Partial<Response>;
  let partialUpdateTutorMock: jest.SpyInstance;

  beforeEach(() => {
    partialUpdateTutorMock = jest.spyOn(tutorDB, 'partialUpdateTutor');
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis(),
    };
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should update a tutor with valid data', async () => {
    const tutorId = 'any id';
    const updates: ITutor = {
      name: 'any name',
      email: 'rjunior@email.com',
      password: 'aaa-bbb-ccc',
      date_of_birth: new Date('1990-01-01 10:10'),
      phone: '88994953035',
      zip_code: '63400000',
    };

    partialUpdateTutorMock.mockResolvedValue(updates);

    await partialUpdateTutorService(tutorId, updates, res as Response);

    expect(partialUpdateTutorMock).toHaveBeenCalledWith(tutorId, updates);

    expect(res.status).toHaveBeenCalledWith(StatusCodes.OK);
    expect(res.json).toHaveBeenCalledWith(updates);
  });

  it('should respond with 404 if no tutor with the given id is found', async () => {
    const tutorId = 'any id';
    const updates: ITutor = {
      name: 'any name',
      email: 'rjunior@email.com',
      password: 'aaa-bbb-ccc',
      date_of_birth: new Date('1990-01-01 10:10'),
      phone: '88994953035',
      zip_code: '63400000',
    };

    partialUpdateTutorMock.mockResolvedValue(null);

    await partialUpdateTutorService(tutorId, updates, res as Response);

    // check if calls repository function with the correct arguments C:
    expect(partialUpdateTutorMock).toHaveBeenCalledWith(tutorId, updates);

    expect(res.status).toHaveBeenCalledWith(StatusCodes.NOT_FOUND);
    expect(res.json).toHaveBeenCalledWith({ msg: `No tutor with id ${tutorId}` });
  });
});
