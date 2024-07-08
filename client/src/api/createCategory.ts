import { API_URL } from "./config";

export async function createCategory({ title, img }: { title: string; img: string; }) {
    const response = await fetch(`${API_URL}/exercises`, {
        method: 'POST',
        body: JSON.stringify({
            title,
            img,
        }),
        headers: {
            'Content-Type': 'application/json',
        }
    });
    return response.json();
}
