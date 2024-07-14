
import  { getUserProfile, User, UserContext, UserContextProviderProps } from '../src/api/getUserProfile'
import React, {  useState, useEffect } from "react";



export const UserContextProvider: React.FC<UserContextProviderProps> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        async function loadUser() {
            try {
                const userProfile = await getUserProfile();
                setUser(userProfile);
            } catch (error) {
                console.error('Failed to load user profile:', error);
                setUser(null);
            }
        }

        if (!user) {
            loadUser();
        }
    }, [user]);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};