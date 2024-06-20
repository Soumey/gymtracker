import dotenv from 'dotenv';
require('dotenv').config();

import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import Deck from './models/Deck';
import cors from 'cors';
import { getDecksController } from './controllers/getDecksController';
import { deleteDeckController } from './controllers/deleteDeckController';
import { createDeckController } from './controllers/createDeckController';
const app = express();
const PORT = 5000;

app.use(cors({
    origin: '*',
}));
app.use(express.json());// json post requests



app.get('/decks', getDecksController);
app.post('/decks',createDeckController);
app.delete('/decks/:deckId', deleteDeckController);



const db = mongoose.connect(
    process.env.MONGO_URL!)
    .then(() => {
        console.log(`listening on ${PORT}`);
        app.listen(PORT);
    })