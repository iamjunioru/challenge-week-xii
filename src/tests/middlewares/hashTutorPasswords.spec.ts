import { Request, Response, NextFunction } from 'express';
import bcrypt from 'bcrypt';
import { hashTutorPassword } from '../../middlewares/hashTutorPassword';

describe('Hash tutor password middleware', () => {
    let req: Partial<Request>;
    let res: Partial<Response>;
    let next: Partial<NextFunction>;
    let genSaltMock: any;
    let hashMock: any;

    beforeAll(() => {
        res = {};

        next = jest.fn();

        genSaltMock = jest
            .spyOn(bcrypt, 'genSalt')
            .mockImplementation(jest.fn());

        hashMock = jest.spyOn(bcrypt, 'hash').mockImplementation(
            jest.fn().mockImplementation((p: string, q: string) => {
                return 'hashed';
            })
        );
    });

    afterAll(() => {
        jest.clearAllMocks();
    });

    it('should hash the password before sending it to the controller', async () => {
        req = {
            body: {
                password: 'abc',
            },
        };

        await hashTutorPassword(
            req as Request,
            res as Response,
            next as NextFunction
        );

        const result = req.body.password;

        expect(genSaltMock).toHaveBeenCalled();
        expect(hashMock).toHaveBeenCalled();
        expect(result).toBe('hashed');
        expect(next).toHaveBeenCalled();
    });
});
