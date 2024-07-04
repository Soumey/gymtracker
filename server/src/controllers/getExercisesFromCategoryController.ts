import { Request, Response } from 'express';
import ExerciseCategory from '../models/ExerciseCategory';
import mongoose from 'mongoose';

export const getExercisesFromCategoryController = async (req: Request, res: Response) => {
    try {
        const { categoryId } = req.params;

        if (!mongoose.Types.ObjectId.isValid(categoryId)) {
            return res.status(400).json({ message: 'Invalid category ID format' });
        }

        const category = await ExerciseCategory.findById(categoryId);
        if (!category) {
            return res.status(404).json({ message: 'Category not found' });
        }

        res.json(category.exercises);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};
