import { Request, Response } from "express";
import Deck from '../models/Deck';

export async function createCardForDeckController(req: Request, res: Response) {
    const deckId = req.params.deckId;
    const deck = await Deck.findById(deckId);
    const { name, description, link } = req.body;
    if (!deck) return res.status(400).send("no deck of this id exists");
    
     deck.exercise.push({ name, description, link });
     await deck.save();
 
     res.json(deck);
} 