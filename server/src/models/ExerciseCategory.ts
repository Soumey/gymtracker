import mongoose, { Document, Schema, Types } from 'mongoose';

interface Exercise {
    _id: Types.ObjectId;
    name: string;
    description: string;
    youtubeLink: string;
}

interface ExerciseCategory extends Document {
    title: string;
    img: string;
    exercises: Exercise[];
}

const ExerciseSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    youtubeLink: { type: String, required: true }
});

const ExerciseCategorySchema = new Schema({
    title: { type: String, required: true },
    img: { type: String, required: true },
    exercises: [ExerciseSchema]
});

const ExerciseCategoryModel = mongoose.model<ExerciseCategory>('ExerciseCategory', ExerciseCategorySchema);

export default ExerciseCategoryModel;
