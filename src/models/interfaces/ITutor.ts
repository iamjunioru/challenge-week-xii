import { IPet } from "./IPet";

export interface ITutor {
    _id?: string;
    name: string;
    phone: string;
    email: string;
    date_of_birth: Date;
    zip_code: string;
    pets?: IPet[];
}
