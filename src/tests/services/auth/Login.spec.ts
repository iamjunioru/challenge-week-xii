import { Response } from 'express';
import { loginService } from '../../../services/auth/Login';
import * as tutorService from '../../../services/tutor/TutorService.getOne';
import bcrypt from 'bcrypt';
import { AuthUtils } from '../../../utils/authUtils';

describe('Login service', () => {
    let getOneMock: any;
    let comparePasswordMock: any;
    let res: Partial<Response>;
    let createTokenMock: any;
    let createTokenUserMock: any;
    let err: Error;

    beforeAll(() => {
        getOneMock = jest.spyOn(tutorService, 'getTutor').mockImplementation(
            jest.fn().mockImplementation((args: any) => {
                if (args.email !== 'test@test.com') return false;
                return {
                    _id: 'abcd',
                    name: 'test',
                    password: 'abc',
                    phone: '11111111111',
                    email: 'test@test.com',
                    date_of_birth: new Date('2000-10-02 10:10'),
                    zip_code: '65520130',
                };
            })
        );

        comparePasswordMock = jest.spyOn(bcrypt, 'compare').mockImplementation(
            jest
                .fn()
                .mockImplementation(
                    (passwordToCompare: string, passwordReference: string) => {
                        return passwordReference === passwordToCompare;
                    }
                )
        );

        createTokenMock = jest
            .spyOn(AuthUtils, 'createToken')
            .mockImplementation(
                jest.fn().mockImplementation((args: any) => {
                    return 'token';
                })
            );

        createTokenUserMock = jest
            .spyOn(AuthUtils, 'createTokenUser')
            .mockImplementation(
                jest.fn().mockImplementation((args: any) => {
                    return 'tokenUser';
                })
            );

        res = {
            status: jest.fn().mockImplementation((statusCode: number) => {
                return res;
            }),
            json: jest.fn().mockImplementation((args: object) => {
                return res;
            }),
        };
    });

    afterAll(() => {
        jest.clearAllMocks();
    });

    it('should return a token when valid data is passed', async () => {
        const token = createTokenMock();
        const validLoginData = {
            email: 'test@test.com',
            password: 'abc',
        };

        try {
            await loginService(
                validLoginData.email,
                validLoginData.password,
                res as Response
            );
        } catch (error) {
            err = error as Error;
        }

        expect(getOneMock).toBeCalled();
        expect(comparePasswordMock).toBeCalled();
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith({ accessToken: token });
    });

    it('should throw an error when invalid email is passed', async () => {
        const invalidLoginData = {
            email: 'invalid@test.com',
            password: 'abc',
        };

        try {
            await loginService(
                invalidLoginData.email,
                invalidLoginData.password,
                res as Response
            );
        } catch (error) {
            err = error as Error;
        }

        expect(getOneMock).toBeCalled();
        expect(err.message).toBe('Invalid credentials');
    });

    it('should throw an error when invalid password is passed', async () => {
        const invalidLoginData = {
            email: 'test@test.com',
            password: 'invalid',
        };

        try {
            await loginService(
                invalidLoginData.email,
                invalidLoginData.password,
                res as Response
            );
        } catch (error) {
            err = error as Error;
        }

        expect(getOneMock).toBeCalled();
        expect(err.message).toBe('Invalid credentials');
    });
});
