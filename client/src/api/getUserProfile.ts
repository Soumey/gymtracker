import { createContext, ReactNode } from "react";
import { API_URL } from "./config";
export interface User {
    email: string;
    username: string;
}
export interface UserContextProps {
    user: User | null;
    setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

export interface UserContextProviderProps {
    children: ReactNode;
}
export const UserContext = createContext<UserContextProps | undefined>(undefined);

export async function getUserProfile(): Promise<User> {
    const response = await fetch(`${API_URL}/profile`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include'
    });
    if (!response.ok) {
        throw new Error('Failed to fetch user profile');
    }
    return response.json();
}