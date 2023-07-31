import supertest from "supertest";
import { connect, dropCollections, dropDB } from "../helpers/db";
import { app } from "../../app";


describe('Authentication integration test', () => {

    const validTutorExample = {
        name: 'test',
        password: 'abcd-1234',
        phone: '11111111111',
        email: 'test@test.com',
        date_of_birth: '2000-10-02 10:10',
        zip_code: '65520130',
    };

    beforeAll(async () => {
        await connect();
    });

    afterEach(async () => {
        await dropCollections();
    });

    afterAll(async () => {
        await dropDB();
    });

    it('should return the an access token when valid data is provided', async () => {
        await supertest(app).post('/tutor')
            .send(validTutorExample);
        
        const {statusCode, body} = (await supertest(app).post('/auth')
            .send({
                email: validTutorExample.email,
                password: validTutorExample.password
            }));
        
        expect(statusCode).toBe(200);
        expect(body).toHaveProperty('accessToken');
    });

    it('should throw validation error when email is not provided', async () => {     
        const {statusCode, body} = (await supertest(app).post('/auth')
            .send({
                password: validTutorExample.password
            }));
        
        expect(statusCode).toBe(400);
        expect(body.msg).toBe("\"email\" is required");
    });

    it('should throw validation error when password is not provided', async () => {     
        const {statusCode, body} = (await supertest(app).post('/auth')
            .send({
                email: validTutorExample.email
            }));
        
        expect(statusCode).toBe(400);
        expect(body.msg).toBe("\"password\" is required");
    });

    it('should throw validation error when password is not provided', async () => {     
        const {statusCode, body} = (await supertest(app).post('/auth')
            .send({
                email: validTutorExample.email
            }));
        
        expect(statusCode).toBe(400);
        expect(body.msg).toBe("\"password\" is required");
    });

    it('should throw bad request error when email is not signed up', async () => {     
        const {statusCode, body} = (await supertest(app).post('/auth')
            .send({
                email: 'generic@test.com',
                password: 'pass'
            }));
        
        expect(statusCode).toBe(400);
        expect(body.msg).toBe("Invalid credentials");
    });

    it('should throw bad request error when password is wrong', async () => { 
        await supertest(app).post('/tutor')
            .send(validTutorExample);
        
        const {statusCode, body} = (await supertest(app).post('/auth')
            .send({
                email: validTutorExample.email,
                password: 'pass'
            }));
        
        expect(statusCode).toBe(400);
        expect(body.msg).toBe("Invalid credentials");
    });
})