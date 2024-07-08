import { API_URL } from "./config";
import { TCategory } from "./getCategories";

export async function createExercise(categoryId:string,description:string,youtubeLink:string):Promise<TCategory>{
    const response = await fetch(`${API_URL}/exercises/${categoryId}/exercises`, {
        method: 'POST',
        body: JSON.stringify({
            name,
            description,
            youtubeLink
        }),
        headers: {
          'Content-Type': 'application/json',
        }
      });
      return response.json();
}
