import jwt from 'jsonwebtoken';
import { AuthUtils } from '../../utils/authUtils';
import { ITutor } from '../../models/interfaces/ITutor';

describe('AuthUtils', () => {
    let jwtSignMock: any;
    let jwtVerifyMock: any;

    beforeAll(() => {
        jwtSignMock = jest.spyOn(jwt, 'sign').mockImplementation(
            jest.fn().mockImplementation((user: object) => {
                return 'token';
            })
        );

        jwtVerifyMock = jest.spyOn(jwt, 'verify').mockImplementation(
            jest.fn().mockImplementation((token: string) => {
                return { email: 'test@test.com', id: 'abc' };
            })
        );
    });

    afterAll(() => {
        jest.clearAllMocks();
    });

    it('should create a token user when a tutor is passed', () => {
        const tutor: ITutor = {
            _id: 'abc',
            name: 'Jon',
            password: 'abcd-1234',
            phone: '11111111111',
            email: 'jon@jon.com',
            date_of_birth: new Date('2000-10-02 10:10'),
            zip_code: '65520130',
        };

        const result = AuthUtils.createTokenUser(tutor);

        expect(result.email).toBe(tutor.email);
        expect(result.id).toBe(tutor._id);
    });

    it('should create a token when a token user is passed', () => {
        const tokenUser = { email: 'test@test.com', id: 'abc' };

        const result = AuthUtils.createToken(tokenUser);

        expect(result).toBe('token');
    });

    it('should create return user data when a token verified', () => {
        const token = 'token';

        const result = AuthUtils.verifyToken(token);

        expect(result).toHaveProperty('email');
        expect(result).toHaveProperty('id');
    });
});
