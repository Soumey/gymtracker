import { Request, Response } from 'express';
import ExerciseCategory from '../models/ExerciseCategory';

export const getExerciseCategoryController = async (req: Request, res: Response) => {
    try {
        const { categoryId } = req.params;
        const category = await ExerciseCategory.findById(categoryId);
        if (!category) {
            return res.status(404).json({ message: 'Category not found' });
        }
        res.json(category);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};
