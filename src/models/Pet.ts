import mongoose, { Schema } from "mongoose";
import { v4 as uuidv4 } from "uuid";

const petSchema = new mongoose.Schema(
    {
        _id: {
            type: String,
            default: uuidv4,
        },
        name: {
            type: String,
            required: [true, "must provide name"],
        },
        species: {
            type: String,
            required: [true, "must provide species"],
        },
        carry: {
            type: String,
            required: [true, "must provide carry size"],
        },
        weight: {
            type: Number,
            required: [true, "must provide weight"],
        },
        date_of_birth: {
            type: Date,
            required: [true, "must provide date of birth"],
        },
        tutorId: {
            type: Schema.Types.String,
            ref: "Tutor",
            required: [true, "must provide id of assigned tutor"],
        },
    },
    { versionKey: false }
);

const Pet = mongoose.model("Pet", petSchema);

export { Pet, petSchema };
