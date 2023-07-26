import mongoose from "mongoose";
import{v4 as uuidv4} from 'uuid';

const petSchema = new mongoose.Schema({
    _id: {
        type: String,
        default: uuidv4,
    },
    name: {
        type: String,
        required: [true, 'must name provide'],
    },
    species: {
        type: String,
        required: [true, 'must species provide'],
    },
    carry: {
        type: String,
        required: false
    },
    weight:{
        type: Number,
        required: false
    },
    date_of_birth:{
        type: Date,
        required: false
    },
},
);

const Pet = mongoose.model("Pet", petSchema);

export{Pet, petSchema}