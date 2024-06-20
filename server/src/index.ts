import dotenv from 'dotenv';
require('dotenv').config();

import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import Deck from './models/Deck';
import cors from 'cors';
const app = express();
const PORT = 5001;

app.use(cors({
    origin:'*',
}));
app.use(express.json());// json post requests



app.get('/decks',async (req: Request, res: Response)=>{
    //fetch all decks and send back to user
    //fetch from mongo
    const decks=await Deck.find();
    //console.log(decks);
    //send aray to UI
    res.json(decks);

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