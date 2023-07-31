import { NextFunction, Request, Response } from 'express';
import { AuthUtils } from '../../utils/authUtils';
import { authenticateTutor } from '../../middlewares/authenticator';
import CustomError from '../../errors/CustomError';

describe('Authenticator middleware', () => {
    let req: Partial<Request>;
    let res: Partial<Response>;
    let next: Partial<NextFunction>;
    let verifyTokeMock: any;
    let err: Error;

    beforeAll(() => {
        res = {};

        next = jest.fn();

        verifyTokeMock = jest
            .spyOn(AuthUtils, 'verifyToken')
            .mockImplementation(
                jest.fn().mockImplementation((token: string) => {
                    if (token !== 'token')
                        throw new Error('Not authorized to access this route');
                    return {};
                })
            );
    });

    afterAll(() => {
        jest.clearAllMocks();
    });

    it('should call next function when there is an authorization header', async () => {
        req = {
            headers: {
                authorization: 'Bearer token',
            },

            user: {},
        };

        try {
            await authenticateTutor(
                req as Request,
                res as Response,
                next as NextFunction
            );
        } catch (error) {
            err = error as CustomError;
        }

        expect(next).toBeCalled();
    });

    it('should throw an error when no authorization header is passed', async () => {
        req = {
            headers: {},
        };

        try {
            await authenticateTutor(
                req as Request,
                res as Response,
                next as NextFunction
            );
        } catch (error) {
            err = error as Error;
        }

        expect(err.message).toBe('No token provided');
    });

    it('should throw an error when authorization header does not start with Bearer is passed', async () => {
        req = {
            headers: {
                authorization: '',
            },
        };

        try {
            await authenticateTutor(
                req as Request,
                res as Response,
                next as NextFunction
            );
        } catch (error) {
            err = error as Error;
        }

        expect(err.message).toBe('No token provided');
    });

    it('should throw an error when invalid token is provided', async () => {
        req = {
            headers: {
                authorization: 'Bearer invalid',
            },
        };

        try {
            await authenticateTutor(
                req as Request,
                res as Response,
                next as NextFunction
            );
        } catch (error) {
            err = error as Error;
        }

        expect(verifyTokeMock).toThrow();
        expect(err.message).toBe('Not authorized to access this route');
    });
});
