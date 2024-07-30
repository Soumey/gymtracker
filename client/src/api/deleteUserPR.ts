import { API_URL } from './config';

export async function deleteUserPR(token: string, personalRecordId: string): Promise<{ message: string }> {
    const response = await fetch(`${API_URL}/tracker/`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ personalRecordId })
    });
    return response.json();
}
