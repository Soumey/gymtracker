import { API_URL } from "./config";

export async function createAccount({ username, email ,password }: { username: string; email: string; password:string; }) {
    const response = await fetch(`${API_URL}/register`, {
        method: 'POST',
        body: JSON.stringify({
            username,
            email,
            password
        }),
        headers: {
            'Content-Type': 'application/json',
        }
    });
    return response.json();
}
