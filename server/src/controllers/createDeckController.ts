import { Request, Response } from "express";
import Deck from '../models/Deck';

export async function createDeckController(req: Request, res: Response) {
    const { title, description, youtubeLink } = req.body;
    const newDeck = new Deck({
        title,
        description,
        youtubeLink
    });
    const createdDeck = await newDeck.save();
    res.json(createdDeck);
}
