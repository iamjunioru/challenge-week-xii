import "dotenv/config";
import { app } from "./app";
import mongoose from "mongoose";

const port = process.env.PORT || 3000;

const start = async () => {
    try {
        app.listen(port, async () => {
            mongoose.connect(process.env.MONGO_URI as string);
            console.log(`Server is listening port ${port}...`);
        });
    } catch (error) {
        console.log(error);
    }
};

start();
