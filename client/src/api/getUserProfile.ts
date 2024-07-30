import { createContext, ReactNode } from "react";
import { API_URL } from "./config";
export interface TPersonalRecords{
    _id:string;
    name:string;
    weight:number;
    unit:string;
}
export interface User {
    email: string;
    username: string;
    personalRecords:TPersonalRecords[];
}
export interface UserContextProps {
    user: User | null;
    setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

export interface UserContextProviderProps {
    children: ReactNode;
}
export const UserContext = createContext<UserContextProps | undefined>(undefined);

export async function getUserProfile(token: string): Promise<User> {
    const response = await fetch(`${API_URL}/profile`, {
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