import dotenv from 'dotenv';

require('dotenv').config();

import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import Deck from './models/Deck'

const app = express();
const PORT = 5001
app.use(express.json())// json post requests


app.get('/', (req: Request, res: Response) => {
    res.send('hello world');
});

app.post('/decks', async (req: Request, res: Response) => {
    const newDeck = new Deck({
        title: req.body.title
    });
    const createdDeck = await newDeck.save();
    res.json(createdDeck)
});

const db = mongoose.connect(
    process.env.MONGO_URL!)
    .then(() => {
        console.log(`listening on ${PORT}`);
        app.listen(PORT);
    })