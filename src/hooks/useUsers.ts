import { useState } from 'react';
import IUser from '../models/user.interface';

export const useUsers = (key: string, initialValue: IUser | []) => {
    // State to store our value
    // Pass initial state function to useState so logic is only executed once
    const [storedValue, setStoredValue] = useState(() => {
        const item = window.localStorage.getItem(key);
        // Parse stored json or if none return initialValue
        return item ? JSON.parse(item) : initialValue;

    });

    // Return a wrapped version of useState's setter function that ...
    // ... persists the new value to localStorage.
    const setValue = (users: IUser) => {

        const objForLocalStorage = {
            timeToExpire: new Date(),
            users: users
        }
        const valueToStore =
            users instanceof Function ? users(storedValue) : users;
        // Save state
        setStoredValue(valueToStore);
        // Save to local storage
        window.localStorage.setItem(key, JSON.stringify(objForLocalStorage));

    };

    return [storedValue, setValue];
}