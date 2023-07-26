import { app } from "./app";


const port = process.env.PORT || 3000;

const start = async () => {
    try {
        app.listen(port, () => console.log(`Server is listening port ${port}...`));
    } catch (error) {
        console.log(error);
    }
}

start()
