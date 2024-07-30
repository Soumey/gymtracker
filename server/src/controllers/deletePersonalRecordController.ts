import { Request, Response } from 'express';
import User from '../models/User';
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';

export const deletePersonalRecordController = async (req: Request, res: Response) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(401).json({ message: 'No token provided' });
    }

    const token = authHeader.split(' ')[1];
    const { personalRecordId } = req.body;

    try {
        const decoded: any = jwt.verify(token, process.env.JWT_SECRET!);
        const userId = decoded.id;
        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const personalRecordIndex = user.personalRecords.findIndex(
            personalRecord => personalRecord._id?.toString() === personalRecordId
        );
        if (personalRecordIndex === -1) {
            return res.status(404).json({ message: 'Personal record not found' });
        }

        user.personalRecords.splice(personalRecordIndex, 1);
        await user.save();

        res.json({ message: 'Personal record deleted' });
    } catch (error) {
        if (error instanceof jwt.JsonWebTokenError) {
            return res.status(403).json({ message: 'Invalid token' });
        }
        res.status(500).json({ message: 'Server error' });
    }
};
