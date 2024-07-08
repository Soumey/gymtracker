// this one get ONLY exercises from specific category
import { API_URL } from "./config";
import { TCategory } from "./getCategories"



export async function getCategory(categoryId:string):Promise<TCategory> {
    const response = await fetch(`${API_URL}/${categoryId}/exercises`);
    return response.json();
}