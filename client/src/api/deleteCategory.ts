import { API_URL } from "./config";

export async function deleteCategory(categoryId:string){
    await fetch(`${API_URL}/exercises/${categoryId}`, {
        
        method: 'DELETE',
      });
}