import { Request, Response } from 'express';
import ExerciseCategory from '../models/ExerciseCategory';
import mongoose from 'mongoose';

export const addExerciseToCategoryController = async (req: Request, res: Response) => {
    try {
        const { categoryId } = req.params;
        const { name, description, youtubeLink } = req.body;

        if (!mongoose.Types.ObjectId.isValid(categoryId)) {
            return res.status(400).json({ message: 'Invalid category ID format' });
        }

        const category = await ExerciseCategory.findById(categoryId);
        if (!category) {
            return res.status(404).json({ message: 'Category not found' });
        }

        const newExercise = {
            _id: new mongoose.Types.ObjectId(), // Generate a new ObjectId for the exercise
            name,
            description,
            youtubeLink
        };

        category.exercises.push(newExercise);
        await category.save();

        res.status(201).json(newExercise);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};
