import { Request, Response, NextFunction } from "express";
import bcrypt from "bcrypt";

export async function hashTutorPassword(
    req: Request,
    _res: Response,
    next: NextFunction
) {
    const password: string = req.body.password;

    const saltRounds = Number(process.env.SALT_ROUNDS!);
    const salt = await bcrypt.genSalt(saltRounds);

    this.password = await bcrypt.hash(password, salt);
    next();
}
