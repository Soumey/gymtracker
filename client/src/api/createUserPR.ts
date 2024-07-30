import { API_URL } from "./config";
import { TPersonalRecords } from "./getUserProfile";

export async function createUserPR(token: string,name:string,unit:string,weight:number):Promise<TPersonalRecords[]>{
    const response = await fetch(`${API_URL}/tracker`, {
        method: 'POST',
        body: JSON.stringify({
            name,
            weight,
            unit
        }),
        headers: {
          'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
      });
      return response.json();
}
