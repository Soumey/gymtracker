// this one get ONLY exercises from specific category
import { API_URL } from "./config";
import {  TExercise } from "./getCategories"



export async function getExercises(categoryId: string): Promise<TExercise[]> {
    const response = await fetch(`${API_URL}/categories/${categoryId}/exercises`);
    return await response.json();
}