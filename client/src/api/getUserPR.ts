
import { API_URL } from "./config";
import { TPersonalRecords } from "./getUserProfile";

export async function getUserPR(token: string): Promise<TPersonalRecords[]> {
    const response = await fetch(`${API_URL}/tracker`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });
    if (!response.ok) {
        throw new Error('Failed to fetch user profile');
    }
    return response.json();
}