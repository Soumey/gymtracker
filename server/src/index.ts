require('dotenv').config();
import express, {  } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import cookieParser from 'cookie-parser'
import { getExerciseCategoryController } from './controllers/getExerciseCategoryController';
import { addExerciseToCategoryController } from './controllers/addExerciseToCategoryController';
import { createExerciseCategoryController } from './controllers/createExerciseCategoryController';
import { deleteExerciseCategoryController } from './controllers/deleteExerciseCategoryController';
import { deleteExerciseFromCategoryController } from './controllers/deleteExerciseFromCategoryController';
import { getExercisesFromCategoryController } from './controllers/getExercisesFromCategoryController';
import { getCategoriesController } from './controllers/getCategories';
import { createAccountController } from './controllers/createAccountController';
import { loginUserController } from './controllers/loginUserController';
import { getProfileController } from './controllers/getProfileController';
import { updateProfileController } from './controllers/updateProfileController';
import {  createPersonalRecordController } from './controllers/createPersonalRecordController';
import { getPersonalRecord } from './controllers/getPersonalRecord';
import { deletePersonalRecordController } from './controllers/deletePersonalRecordController';


const app = express();
const PORT = 5001;

app.use(cors({
    origin: 'http://localhost:5173',
    credentials:true
}));
app.use(express.json({ limit: '5mb' }));// json post requests
app.use(cookieParser())
app.use(express.urlencoded({extended:false}))

// Routes for exercise categories
app.get('/categories', getCategoriesController); //fetch all categories
app.get('/categories/:categoryId', getExerciseCategoryController); // fetch 1 category with exercises
app.post('/categories', createExerciseCategoryController);
app.delete('/categories/:categoryId', deleteExerciseCategoryController);

// Routes for exercises within a category
app.get('/categories/:categoryId/exercises', getExercisesFromCategoryController); //get exercises only from category
app.post('/categories/:categoryId/exercises', addExerciseToCategoryController);
app.delete('/categories/:categoryId/exercises/:exerciseId', deleteExerciseFromCategoryController);

//Auth routes
app.post('/register/',createAccountController)
app.post('/login',loginUserController)
app.get('/profile',getProfileController)

//Personal Records Routes
//app.post('/')
//app.get('/profile')
app.post('/profile/', updateProfileController)
//user PRs
app.post('/tracker/',createPersonalRecordController)
app.get('/tracker/', getPersonalRecord)
app.delete('/tracker/',deletePersonalRecordController)
const db = mongoose.connect(
    process.env.MONGO_URL!)
    .then(() => {
        console.log(`listening on ${PORT}`);
        app.listen(PORT);
    })