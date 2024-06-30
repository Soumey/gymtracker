import { Request, Response } from "express";
import Deck from "../models/Deck";

export async function getDeckController(req: Request, res: Response) {
    //fetch all decks and send back to user
    //fetch from mongo
    const {deckId}=req.params;
    const deck = await Deck.findById(deckId);
    //console.log(decks);
    //send aray to UI
    res.json(deck);
}

