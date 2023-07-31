import { Request, Response, NextFunction } from "express";
import CustomError from "../errors/CustomError";
import { StatusCodes } from "http-status-codes";
import { AuthUtils } from "../utils/authUtils";
import { JwtPayload } from "jsonwebtoken";

export const authenticateTutor = async (
    req: Request,
    _res: Response,
    next: NextFunction
) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        throw new CustomError("No token provided", StatusCodes.UNAUTHORIZED);
    }

    const token: string = authHeader.split(" ")[1];

    try {
        const decodedToken = AuthUtils.verifyToken(token);
        req.user = { ...(decodedToken as JwtPayload) };
        next();
    } catch (error) {
        throw new CustomError(
            "Not authorized to access this route",
            StatusCodes.UNAUTHORIZED
        );
    }
};
