import { ITutor } from "../models/interfaces/ITutor";
import jwt from "jsonwebtoken";

type TokenUser = { email: string; id: string };

export class AuthUtils {
    static createTokenUser(tutor: ITutor) {
        return { email: tutor.email, id: tutor._id! };
    }

    static createToken(tokenUser: TokenUser) {
        return jwt.sign(tokenUser, process.env.JWT_SECRET!, {
            expiresIn: process.env.JWT_LIFETIME,
        });
    }

    static verifyToken(token: string) {
        return jwt.verify(token, process.env.JWT_SECRET!);
    }
}
