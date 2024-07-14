import { Request, Response } from "express";
import User from "../models/User";
import { comparePassword } from "../helpers/auth";
import jwt from 'jsonwebtoken';

export async function loginUserController(req: Request, res: Response) {
    try {
        const { email, password } = req.body;

        // Check if user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ error: "No user found" });
        }

        // Check if password matches
        const match = await comparePassword(password, user.password);
        if (match) {
            const token = jwt.sign(
                { email: user.email, id: user._id, username: user.username },
                process.env.JWT_SECRET!,
                { expiresIn: '1h' } // Token expiration time
            );

            res.cookie('token', token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production', // Use secure cookies in production only
                sameSite: 'lax'
            });
            return res.status(200).json(user);
        } else {
            return res.status(401).json({ error: "Password does not match" });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal server error" });
    }
}
