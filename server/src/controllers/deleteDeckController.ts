import { Request, Response } from "express";
import Deck from '../models/Deck';

export async function deleteDeckController(req: Request, res: Response){
    // get deck id from url
    const deckId = req.params.deckId;
    //delete deck from mongo
    const deck = await Deck.findByIdAndDelete(deckId);
    // retrun the deleted deck to the user who made the request
    res.json(deck);
}