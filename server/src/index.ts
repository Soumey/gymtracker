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
const PORT = 5001;

app.use(cors({
    origin: `http://localhost:${PORT}`,
}));
app.use(express.json({ limit: '50mb' }));// json post requests



// app.get('/exercises', getDecksController);
// app.post('/exercises',createDeckController);
// app.delete('/exercises/:deckId', deleteDeckController);

// app.get('/exercises/decks/:deckId', getDeckController);
// app.post('/exercises/decks/:deckId/cards',createCardForDeckController);
// app.delete('/exercises/decks/:deckId/cards/:index', deleteCardOnDeckController);

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




const db = mongoose.connect(
    process.env.MONGO_URL!)
    .then(() => {
        console.log(`listening on ${PORT}`);
        app.listen(PORT);
    })