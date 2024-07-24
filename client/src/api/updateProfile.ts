import { API_URL } from "./config";

export async function updateProfile({ email, password, username, newPassword }: { email: string; password: string; username?: string; newPassword?: string; }) {
  const response = await fetch(`${API_URL}/profile`, {
    method: 'POST',
    body: JSON.stringify({
      email,
      password,
      username,
      newPassword
    }),
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: "include"
  });
  return response.json();
}
