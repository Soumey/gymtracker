import { API_URL } from "./config";
import {  TExercise } from "./getCategories";

export async function createExercise(categoryId:string,name:string,description:string,link:string):Promise<TExercise>{
    const response = await fetch(`${API_URL}/categories/${categoryId}/exercises`, {
        method: 'POST',
        body: JSON.stringify({
            name,
            description,
            link
        }),
        headers: {
          'Content-Type': 'application/json',
        }
      });
      return response.json();
}
