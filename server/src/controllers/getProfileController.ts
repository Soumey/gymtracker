import { Request, Response } from "express";
import User from "../models/User";
import { comparePassword } from "../helpers/auth";
import jwt from 'jsonwebtoken';

export async function getProfileController(req: Request, res: Response) {
    const { token } = req.cookies;
    if (token) {
        jwt.verify(token, process.env.JWT_SECRET!, {}, (err, user) => {
            if (err) throw err;
            res.json(user);
        })
    } else {
        res.json(null);
    }
}

