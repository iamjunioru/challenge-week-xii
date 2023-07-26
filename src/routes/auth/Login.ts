import express from 'express';
import { Request, Response } from 'express';
// import jwt from 'jsonwebtoken';

const route = express.Router();

route.post('/auth', async (req: Request, res: Response) => {
  // ... (auth logic)
});

export { route };