import { Request, Response } from 'express';
import User from '../models/User';
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';

export const createPersonalRecordController = async (req: Request, res: Response) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(401).json({ message: 'No token provided' });
    }

    const token = authHeader.split(' ')[1];

    try {
        const decoded: any = jwt.verify(token, process.env.JWT_SECRET!);
        const userId = decoded.id;

        const { name, weight, unit } = req.body;
        if (!mongoose.Types.ObjectId.isValid(userId)) {
            return res.status(400).json({ message: 'Invalid user ID format' });
        }

        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const newPR = {
            _id: new mongoose.Types.ObjectId(),
            name,
            weight,
            unit
        };

        user.personalRecords.push(newPR);
        await user.save();
        res.status(201).json(newPR);
    } catch (error) {
        if (error instanceof jwt.JsonWebTokenError) {
            return res.status(403).json({ message: 'Invalid token' });
        }
        res.status(500).json({ message: 'Server error' });
    }
    
};
