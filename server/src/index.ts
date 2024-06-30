import dotenv from 'dotenv';
require('dotenv').config();

import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import Deck from './models/Deck';
import cors from 'cors';
import { getDecksController } from './controllers/getDecksController';
import { deleteDeckController } from './controllers/deleteDeckController';
import { createDeckController } from './controllers/createDeckController';
import { createCardForDeckController } from './controllers/createCardForDeckController';
import { getDeckController } from './controllers/getDeckController';
import { deleteCardOnDeckController } from './controllers/deleteCardOnDeckController';

const app = express();
const PORT = 5002;

app.use(cors({
    origin: '*',
}));
app.use(express.json());// json post requests



app.get('/decks', getDecksController);
app.post('/decks',createDeckController);
app.delete('/decks/:deckId', deleteDeckController);

app.get('/decks/:deckId', getDeckController);
app.post('/decks/:deckId/cards',createCardForDeckController);
app.delete('/decks/:deckId/cards/:index', deleteCardOnDeckController);


const db = mongoose.connect(
    process.env.MONGO_URL!)
    .then(() => {
        console.log(`listening on ${PORT}`);
        app.listen(PORT);
    })