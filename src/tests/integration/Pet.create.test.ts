import { app } from '../../app';
import { connect, dropCollections, dropDB } from "../helpers/db";
import supertest from "supertest";

describe('Tutor routes integration test', () => {
    const baseURL: string = 'localhost:3000';
    let validPetExample: any;

    const validTutorExample = {
        name: 'test',
        password: 'abcd-1234',
        phone: '11111111111',
        email: 'test@test.com',
        date_of_birth: '2000-10-02 10:10',
        zip_code: '65520130',
    };

    let testUser: any;
    let token: string;
    
    beforeAll(async () => {
        await connect();
    });
    
    beforeEach(async () => {
        testUser = (await supertest(app).post('/tutor')
            .send(validTutorExample))
            .body;

        token = (await supertest(app).post('/auth')
            .send({
                email: validTutorExample.email,
                password: validTutorExample.password
            }))
            .body
            .accessToken
            
        validPetExample = {
            name: 'Juju',
            species: 'dog',
            carry: 'p',
            weight: 5,
            date_of_birth: '2000-10-02 10:10',
        };
    })

    afterEach(async () => {
        await dropCollections();
    });

    afterAll(async () => {
        await dropDB();
    });

    it('should throw unauthenticated error when tutor is not logged in', async () => {

        const result = await supertest(app).post(`/pet/i1234`)
            .send(validPetExample)
        

        expect(result.statusCode).toBe(401);
    })

    it('should throw not found error when tutor is not found', async () => {
        
        const result = (await supertest(app).post(`/pet/1234`)
            .send(validPetExample)
            .set({Authorization: `Bearer ${token}`}));
        

        expect(result.statusCode).toBe(404);
    })

    it('should throw validation error when name is empty', async () => {
        const invalidPetData = validPetExample;
        Object.assign(invalidPetData, {name: ''});

        const {statusCode, body} = (await supertest(app).post(`/pet/${testUser._id}`)
            .send(invalidPetData)
            .set({Authorization: `Bearer ${token}`}));

        expect(statusCode).toBe(400);
        expect(body).toHaveProperty('msg');
        expect(body.msg).toBe("\"name\" is not allowed to be empty");
    })

    it('should throw validation error when species is empty', async () => {
        const invalidPetData = validPetExample;
        Object.assign(invalidPetData, {species: ''});

        const {statusCode, body} = (await supertest(app).post(`/pet/${testUser._id}`)
            .send(invalidPetData)
            .set({Authorization: `Bearer ${token}`}));

        expect(statusCode).toBe(400);
        expect(body).toHaveProperty('msg');
        expect(body.msg).toBe("\"species\" is not allowed to be empty");
    })

    it('should throw validation error when carry is empty', async () => {
        const invalidPetData = validPetExample;
        Object.assign(invalidPetData, {carry: ''});

        const {statusCode, body} = (await supertest(app).post(`/pet/${testUser._id}`)
            .send(invalidPetData)
            .set({Authorization: `Bearer ${token}`}));


        expect(statusCode).toBe(400);
        expect(body).toHaveProperty('msg');
        expect(body.msg).toBe("\"carry\" is not allowed to be empty");
    })

    it('should throw validation error when weight is not present', async () => {
        const invalidPetData = validPetExample;
        delete invalidPetData.weight;

        const {statusCode, body} = (await supertest(app).post(`/pet/${testUser._id}`)
            .send(invalidPetData)
            .set({Authorization: `Bearer ${token}`}));


        expect(statusCode).toBe(400);
        expect(body).toHaveProperty('msg');
        expect(body.msg).toBe("\"weight\" is required");
    })

    it('should throw validation error when date_of_birth is not present', async () => {
        const invalidPetData = validPetExample;
        delete invalidPetData.date_of_birth;

        const {statusCode, body} = (await supertest(app).post(`/pet/${testUser._id}`)
            .send(invalidPetData)
            .set({Authorization: `Bearer ${token}`}));


        expect(statusCode).toBe(400);
        expect(body).toHaveProperty('msg');
        expect(body.msg).toBe("\"date_of_birth\" is required");
    })

    it('should successfully create pet when valid data is passed', async () => {
        
        const result = (await supertest(app).post(`/pet/${testUser._id}`)
            .send(validPetExample)
            .set({Authorization: `Bearer ${token}`}));
        

        expect(result.statusCode).toBe(201);
    })
})
