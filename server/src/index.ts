import dotenv from 'dotenv';
require('dotenv').config();

import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import Deck from './models/Deck';
import cors from 'cors';
import { getDecksController } from './controllers/getDecksController';
import { deleteDeckController } from './controllers/deleteDeckController';
import { createDeckController } from './controllers/createDeckController';
import { createCardForDeckController } from './controllers/createCardForDeckController';
import { getDeckController } from './controllers/getDeckController';
import { deleteCardOnDeckController } from './controllers/deleteCardOnDeckController';
import { getExerciseCategoryController } from './controllers/getExerciseCategoryController';
import { addExerciseToCategoryController } from './controllers/addExerciseToCategoryController';
import { createExerciseCategoryController } from './controllers/createExerciseCategoryController';
import { deleteExerciseCategoryController } from './controllers/deleteExerciseCategoryController';
import { deleteExerciseFromCategoryController } from './controllers/deleteExerciseFromCategoryController';
import { getExercisesFromCategoryController } from './controllers/getExercisesFromCategoryController';
import { getCategoriesController } from './controllers/getCategories';

const app = express();
const PORT = 5000;

app.use(cors({
    origin: '*',
}));
app.use(express.json({ limit: '50mb' }));// json post requests



// app.get('/exercises', getDecksController);
// app.post('/exercises',createDeckController);
// app.delete('/exercises/:deckId', deleteDeckController);

// app.get('/exercises/decks/:deckId', getDeckController);
// app.post('/exercises/decks/:deckId/cards',createCardForDeckController);
// app.delete('/exercises/decks/:deckId/cards/:index', deleteCardOnDeckController);

// Routes for exercise categories
app.get('/exercises', getCategoriesController); //fetch all categories
app.get('/exercises/:categoryId', getExerciseCategoryController); // fetch 1 category with exercises
app.post('/exercises', createExerciseCategoryController);
app.delete('/exercises/:categoryId', deleteExerciseCategoryController);

// Routes for exercises within a category
app.get('/exercises/:categoryId/exercises', getExercisesFromCategoryController); //get exercises only from category
app.post('/exercises/:categoryId/exercises', addExerciseToCategoryController);
app.delete('/exercises/:categoryId/exercises/:exerciseId', deleteExerciseFromCategoryController);




const db = mongoose.connect(
    process.env.MONGO_URL!)
    .then(() => {
        console.log(`listening on ${PORT}`);
        app.listen(PORT);
    })