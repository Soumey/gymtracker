import { API_URL } from "./config";

export async function createDeck({ title, description, youtubeLink }: { title: string; description: string; youtubeLink: string; }) {
    const response = await fetch(`${API_URL}/decks`, {
        method: 'POST',
        body: JSON.stringify({
            title,
            description,
            youtubeLink
        }),
        headers: {
            'Content-Type': 'application/json',
        }
    });
    return response.json();
}
