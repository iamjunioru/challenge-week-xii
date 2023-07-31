import { Request, Response, NextFunction } from 'express';
import { formatDate } from '../../middlewares/formatDate';

describe('Format date middleware', () => {
    let req: Partial<Request>;
    let res: Partial<Response>;
    let next: Partial<NextFunction>;

    beforeAll(() => {
        res = {};

        next = jest.fn();
    });

    afterAll(() => {
        jest.clearAllMocks();
    });

    it('should transform a string into a Date object', async () => {
        const stringDate = '2010-02-10 10:10';
        req = {
            body: {
                date_of_birth: stringDate,
            },
        };

        await formatDate(req as Request, res as Response, next as NextFunction);

        const result: Date = req.body.date_of_birth;

        expect(result.getDate()).toBe(10);
        expect(result.getFullYear()).toBe(2010);
        expect(result.getMonth() + 1).toBe(2);
        expect(result.getUTCHours()).toBe(10);
        expect(result.getMinutes()).toBe(10);
        expect(next).toHaveBeenCalled();
    });

    it('should call next when no req.body is passed', async () => {
        req = {
            body: {},
        };

        await formatDate(req as Request, res as Response, next as NextFunction);

        expect(next).toHaveBeenCalled();
    });
});
