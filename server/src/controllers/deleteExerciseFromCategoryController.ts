import { Request, Response } from 'express';
import ExerciseCategory from '../models/ExerciseCategory';

export const deleteExerciseFromCategoryController = async (req: Request, res: Response) => {
    try {
        const { categoryId, exerciseId } = req.params;

        const category = await ExerciseCategory.findById(categoryId);
        if (!category) {
            return res.status(404).json({ message: 'Category not found' });
        }

        const exerciseIndex = category.exercises.findIndex(exercise => exercise._id.toString() === exerciseId);
        if (exerciseIndex === -1) {
            return res.status(404).json({ message: 'Exercise not found' });
        }

        category.exercises.splice(exerciseIndex,1)
        await category.save();

        res.json({ message: 'Exercise deleted' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};
