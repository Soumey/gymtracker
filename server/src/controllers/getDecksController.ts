import { Request, Response } from "express";
import Deck from "../models/Deck";

export async function getDecksController(req: Request, res: Response) {
    //fetch all decks and send back to user
    //fetch from mongo
    const decks = await Deck.find();
    //console.log(decks);
    //send aray to UI
    res.json(decks);
}

