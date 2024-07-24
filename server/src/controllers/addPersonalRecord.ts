import { Request, Response } from 'express';
import User from '../models/User';
import mongoose from 'mongoose';

export const addPersonalRecord = async (req: Request, res: Response) => {
    try {
        const { userId } = req.params;
        const { name, weight, unit } = req.body;

        if (!mongoose.Types.ObjectId.isValid(userId)) {
            return res.status(400).json({ message: 'Invalid User ID format' });
        }

        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const newPersonalRecord = {
            _id: new mongoose.Types.ObjectId(), // Generate a new ObjectId for the exercise
            name,
            weight,
            unit
        };

        user.personalRecords.push(newPersonalRecord);
        await user.save();

        res.status(201).json(newPersonalRecord);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};
