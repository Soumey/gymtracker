import { API_URL } from "./config";
import { TCategory } from "./getCategories";

export async function deleteExercise(categoryId: string, exerciseId: string): Promise<TCategory> {
    const response = await fetch(`${API_URL}/exercises/${categoryId}/exercises/${exerciseId}`, {
        method: 'DELETE',
    });
    return response.json()
}