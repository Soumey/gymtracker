import { Request, Response } from 'express';
import ExerciseCategory from '../models/ExerciseCategory';

export const getCategoriesController = async (req: Request, res: Response) => {
    try {
        // Check if a specific category ID is provided in the request params
        const categoryId = req.params.categoryId;

        // If categoryId is provided, find a specific category by ID
        if (categoryId) {
            const category = await ExerciseCategory.findById(categoryId);
            if (!category) {
                return res.status(404).json({ message: 'Category not found' });
            }
            return res.json(category);
        }

        // If no specific category ID provided, fetch all categories
        const categories = await ExerciseCategory.find();
        res.json(categories);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};
