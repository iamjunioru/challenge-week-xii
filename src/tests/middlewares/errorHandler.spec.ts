import { Request, Response, NextFunction } from 'express';
import { ValidationError } from 'joi';
import errorHandler from '../../middlewares/errorHandler';
import CustomError from '../../errors/CustomError';

describe('Error Handler Middleware', () => {
    let req: Partial<Request>;
    let res: Partial<Response>;
    let next: Partial<NextFunction>;

    beforeAll(() => {
        req = {};

        res = {
            status: jest.fn().mockImplementation((statusCode: number) => {
                return res;
            }),
            json: jest.fn().mockImplementation((args: any) => {
                return res;
            }),
        };

        next = jest.fn();
    });

    afterAll(() => {
        jest.clearAllMocks();
    });

    it('should return response with 404 when joi error is thrown', () => {
        const joiError = new ValidationError('validation', [], {});

        errorHandler(
            joiError,
            req as Request,
            res as Response,
            next as NextFunction
        );

        expect(res.status).toHaveBeenCalledWith(400);
        expect(res.json).toHaveBeenCalledWith({ msg: joiError.message });
    });

    it('should return response with passed code when custom error is thrown', () => {
        const customError = new CustomError('custom error', 404);

        errorHandler(
            customError,
            req as Request,
            res as Response,
            next as NextFunction
        );

        expect(res.status).toHaveBeenCalledWith(customError.statusCode);
        expect(res.json).toHaveBeenCalledWith({ msg: customError.message });
    });

    it('should return response with status 500 when generic error is thrown', () => {
        const genericError = new Error('custom error');

        errorHandler(
            genericError,
            req as Request,
            res as Response,
            next as NextFunction
        );

        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.json).toHaveBeenCalledWith({ msg: genericError.message });
    });
});
