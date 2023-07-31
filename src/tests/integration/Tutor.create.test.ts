import { app } from '../../app';
import { connect, dropCollections, dropDB } from "../helpers/db";
import supertest from "supertest";

describe('Tutor routes integration test', () => {
    const baseURL: string = 'localhost:3000'
    let validTutorExample = 
    
    beforeAll(async () => {
        await connect();
    })
    
    beforeEach(() => {
        validTutorExample = {
            name: 'Jon',
            password: 'abcd-1234',
            phone: '11111111111',
            email: 'jon@jon.com',
            date_of_birth: '2000-10-02 10:10',
            zip_code: '65520130',
        };
    })

    afterEach(async () => {
        await dropCollections();
    });
    
    afterAll(async () => {
        await dropDB();
    });

    it('should throw validation error when zip_code is empty', async () => {
        const invalidTutorData = validTutorExample;
        Object.assign(invalidTutorData, {zip_code: ''});

        const {statusCode, body} = await supertest(app).post('/tutor').send(invalidTutorData);

        expect(statusCode).toBe(400);
        expect(body).toHaveProperty('msg');
        expect(body.msg).toBe("\"zip_code\" is not allowed to be empty");
    })

    it('should throw validation error when date_of_birth is empty', async () => {
        const invalidTutorData = validTutorExample;
        Object.assign(invalidTutorData, {date_of_birth: ''});

        const {statusCode, body} = await supertest(app).post('/tutor').send(invalidTutorData);

        expect(statusCode).toBe(400);
        expect(body).toHaveProperty('msg');
        expect(body.msg).toBe("\"date_of_birth\" must be a valid date");
    })

    it('should throw validation error when name is empty', async () => {
        const invalidTutorData = validTutorExample;
        Object.assign(invalidTutorData, {name: ''});

        const {statusCode, body} = await supertest(app).post('/tutor').send(invalidTutorData);

        expect(statusCode).toBe(400);
        expect(body).toHaveProperty('msg');
        expect(body.msg).toBe("\"name\" is not allowed to be empty");
    })

    it('should throw validation error when password is empty', async () => {
        const invalidTutorData = validTutorExample;
        Object.assign(invalidTutorData, {password: ''});

        const {statusCode, body} = await supertest(app).post('/tutor').send(invalidTutorData);

        expect(statusCode).toBe(400);
        expect(body).toHaveProperty('msg');
        expect(body.msg).toBe("\"password\" is not allowed to be empty");
    })

    it('should throw validation error when email is empty', async () => {
        const invalidTutorData = validTutorExample;
        Object.assign(invalidTutorData, {email: ''});

        const {statusCode, body} = await supertest(app).post('/tutor').send(invalidTutorData);

        expect(statusCode).toBe(400);
        expect(body).toHaveProperty('msg');
        expect(body.msg).toBe("\"email\" is not allowed to be empty");
    })

    it('should throw validation error when phone is empty', async () => {
        const invalidTutorData = validTutorExample;
        Object.assign(invalidTutorData, {phone: ''});

        const {statusCode, body} = await supertest(app).post('/tutor').send(invalidTutorData);

        expect(statusCode).toBe(400);
        expect(body).toHaveProperty('msg');
        expect(body.msg).toBe("\"phone\" is not allowed to be empty");
    })

    it('should successfully create tutor when valid data is passed', async () => {
        const {statusCode} = await supertest(app).post('/tutor').send(validTutorExample);

        expect(statusCode).toBe(201);
    })

})