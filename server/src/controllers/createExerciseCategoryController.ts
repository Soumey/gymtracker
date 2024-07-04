import { Request, Response } from 'express';
import ExerciseCategory from '../models/ExerciseCategory';

export const createExerciseCategoryController = async (req: Request, res: Response) => {
    try {
        const { title, img } = req.body;
        const newCategory = new ExerciseCategory({ title, img, exercises: [] });
        await newCategory.save();
        res.status(201).json(newCategory);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};
