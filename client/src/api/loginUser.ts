import { API_URL } from "./config";

export async function loginUser({  email ,password }: {  email: string; password:string; }) {
    const response = await fetch(`${API_URL}/login`, {
        method: 'POST',
        body: JSON.stringify({
            email,
            password
        }),
        headers: {
            'Content-Type': 'application/json',
        },
        credentials:"include"
    });
    return response.json();
}
