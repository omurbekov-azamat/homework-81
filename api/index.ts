import express from "express";
import cors from 'cors';
import linksRouter from "./routers/Links";
import mongoose from "mongoose";

const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());
app.use('/links', linksRouter);

const run = async () => {
    mongoose.set('strictQuery', false);
    await mongoose.connect('mongodb://localhost/links');

    app.listen(port, () => {
        console.log('We are live on ' + port);
    });

    process.on('exit', () => {
        mongoose.disconnect();
    });
};

run().catch(console.error);