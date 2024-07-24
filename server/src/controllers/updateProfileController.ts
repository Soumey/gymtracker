import { Request, Response } from "express";
import User from "../models/User"
import { hashPassword, comparePassword } from "../helpers/auth";

export async function updateProfileController(req: Request, res: Response) {
    try {
        const { username, email, password } = req.body;
        const user = await User.findOne({ email });
        if (user) {
            const match = await comparePassword(password, user.password);
            if (match) {
                const filter = { email: user }
                const updatedData = await User.findOneAndUpdate(filter, username)
                return res.json(updatedData)
            } else {
                return res.status(401).json({ error: "Wrong password" });
            }
            return res.json(user)
        } else {
            return res.json({
                error: 'user not found'
            })
        }


    } catch (error) {
        console.log(error)
    }
}