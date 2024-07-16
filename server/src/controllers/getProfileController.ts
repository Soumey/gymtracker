import { Request, Response } from "express";
import User from "../models/User";
import { comparePassword } from "../helpers/auth";
import jwt from 'jsonwebtoken';

export async function getProfileController(req: Request, res: Response) {
    const authHeader = req.headers.authorization;
    if (authHeader) {
        const token = authHeader.split(' ')[1];
        jwt.verify(token, process.env.JWT_SECRET!, {}, (err, user) => {
            if (err)  return res.status(403).json({ error: 'Invalid token' });
            res.json(user);
        })
    } else {
        res.status(401).json({ error: 'No token provided' });
    }
}

