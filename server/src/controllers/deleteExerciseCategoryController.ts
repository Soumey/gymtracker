import { Request, Response } from 'express';
import ExerciseCategory from '../models/ExerciseCategory';

export const deleteExerciseCategoryController = async (req: Request, res: Response) => {
    try {
        const { categoryId } = req.params;
        const deletedCategory = await ExerciseCategory.findByIdAndDelete(categoryId);
        if (!deletedCategory) {
            return res.status(404).json({ message: 'Category not found' });
        }
        res.json({ message: 'Category deleted' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};
