import { Request, Response } from "express";
import { loginService } from "../../services/auth/Login";

export async function loginController(req: Request, res: Response) {
    const { email, password } = req.body;
    return await loginService(email, password, res);
}
