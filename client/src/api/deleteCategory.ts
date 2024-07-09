import { API_URL } from "./config";

export async function deleteCategory(categoryId:string){
    await fetch(`${API_URL}/categories/${categoryId}`, {
        
        method: 'DELETE',
      });
}