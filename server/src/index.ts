import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import Deck from './models/Deck'

const app = express();
const PORT = 5000
app.use(express.json())// json post requests


app.get('/', (req: Request, res: Response) => {
    res.send('hello world');
});

app.post('/decks', async (req: Request, res: Response) => {
    //res.send('Show all decks');
    console.log(req.body);
    const newDeck = new Deck({
        title: req.body.title
    });
    const createdDeck = await newDeck.save();
    res.json(createdDeck)
});

const db = mongoose.connect('mongodb+srv://firstTest:S0ijOGdvWpt5gsxt@firstteast.txfooum.mongodb.net/?retryWrites=true&w=majority&appName=FirstTeast').then(() => {
    console.log(`listening on ${PORT}`);
    app.listen(PORT);
})
//S0ijOGdvWpt5gsxt