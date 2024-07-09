import { API_URL } from "./config";
export type TExercise={
    name:string;
    description:string;
    youtubeLink:string;
    __id:string;

}
export type TCategory = {
    _id: string;
    title: string;
    img: string;
    exercises:TExercise[];
  }

export async function getCategories():Promise<TCategory[]> {
    const response = await fetch(`${API_URL}/categories`);
    return response.json();
}