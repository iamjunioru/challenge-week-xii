import mongoose from "mongoose";
import { petSchema } from "../models/Pet";
import { v4 as uuidv4 } from "uuid";

const tutorSchema = new mongoose.Schema(
    {
        _id: {
            type: String,
            default: uuidv4,
        },
        name: {
            type: String,
            required: [true, "must provide name"],
        },
        password: {
            type: String,
            required: [true, "must provide password"],
        },
        phone: {
            type: String,
            required: [true, "must provide phone"],
        },
        email: {
            type: String,
            required: [true, "must provide email"],
            unique: true,
            validate: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/],
        },
        date_of_birth: {
            type: Date,
            required: [true, "must provide date_of_birth"],
        },
        zip_code: {
            type: String,
            required: [true, "must provide zip_code"],
        },
    },
    { versionKey: false }
);

const Tutor = mongoose.model("Tutor", tutorSchema);

export { Tutor };
