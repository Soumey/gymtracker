import { Request, Response } from "express";
import Deck from '../models/Deck';

export async function deleteCardOnDeckController(req: Request, res: Response){
    const deckId=req.params.deckId;
    const index=req.params.index;
    // get deck id from url
    //delete deck from mongo
    const deck = await Deck.findById(deckId);
    // retrun the deleted deck to the user who made the request
    if (!deck) return res.status(400).send("no deck of this id exists");
    deck.exercise.splice(parseInt(index),1);
    await deck.save();
    res.json(deck);
}