import { Request, Response } from 'express';
import { loginController } from '../../../controllers/auth/Login';
import * as loginServ from '../../../services/auth/Login';

describe('Login controller', () => {
    let loginServiceMock: any;

    beforeAll(() => {
        loginServiceMock = jest
            .spyOn(loginServ, 'loginService')
            .mockImplementation(jest.fn());
    });

    afterAll(() => {
        jest.clearAllMocks();
    });

    it('should call the login service layer', async () => {
        const req: Partial<Request> = {
            body: { email: 'abc', password: 'abc' },
        };
        const res: Partial<Response> = {};

        await loginController(req as Request, res as Response);

        expect(loginServiceMock).toBeCalled();
    });
});
