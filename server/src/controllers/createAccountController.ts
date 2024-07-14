import { Request, Response } from "express";
import User from "../models/User"
import { hashPassword, comparePassword } from "../helpers/auth";

export async function createAccountController(req: Request, res: Response) {
    try {
        const { username, email, password } = req.body;
        //Checks if name was entered
        if (!username) {
            return res.json({
                error: 'name is required'
            })
        };
        //Check if password is good
        if (!password) {
            return res.json({
                error: 'password is required'
            })
        };
        // Check email
        const exist = await User.findOne({ email })
        if (exist) {
            return res.json({
                error: 'email already in use'
            })
        }
        const hashedPassword = await hashPassword(password)
        const user = await User.create({
            username,
            email,
            password: hashedPassword
        })
        return res.json(user)
    } catch (error) {
        console.log(error)
    }


} 