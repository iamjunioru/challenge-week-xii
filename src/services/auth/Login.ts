import { StatusCodes } from "http-status-codes";
import CustomError from "../../errors/CustomError";
import { getTutor } from "../tutor/TutorService.getOne";
import { AuthUtils } from "../../utils/authUtils";
import bcrypt from "bcrypt";
import { ITutor } from "../../models/interfaces/ITutor";
import { Response } from "express";

export async function loginService(
    email: string,
    password: string,
    res: Response
) {
    const desiredTutor = await getTutor({ email });

    if (!desiredTutor) {
        throw new CustomError("Invalid credentials", StatusCodes.BAD_REQUEST);
    }

    const validatePassword = await bcrypt.compare(
        password,
        desiredTutor.password!
    );

    if (!validatePassword) {
        throw new CustomError("Invalid credentials", StatusCodes.BAD_REQUEST);
    }

    const tokenUser = AuthUtils.createTokenUser(desiredTutor as ITutor);

    const token = AuthUtils.createToken(tokenUser);

    res.status(StatusCodes.OK).json({ accessToken: token });
}
