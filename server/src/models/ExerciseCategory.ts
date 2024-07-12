import mongoose, { Document, Schema, Types } from 'mongoose';

interface Exercise {
    _id: Types.ObjectId;
    name: string;
    description: string;
    link: string;
}

interface ExerciseCategory extends Document {
    title: string;
    img: string;
    exercises: Exercise[];
}

const ExerciseSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    link: { type: String, required: true }
});

const ExerciseCategorySchema = new Schema({
    title: { type: String, required: true },
    img: { type: String, required: false },
    exercises: [ExerciseSchema]
});

const ExerciseCategoryModel = mongoose.model<ExerciseCategory>('ExerciseCategory', ExerciseCategorySchema);

export default ExerciseCategoryModel;
