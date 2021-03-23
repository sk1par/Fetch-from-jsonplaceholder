import { useEffect, useState } from 'react';
import IUser from '../models/user.interface';
import { checkTimes } from '../utils/utils';
import jsonApi from '../api/jsonApi';
import { LocalStorageUsers } from '../models/localStorageUsers.interface';
import saveToLocalStorage from '../utils/saveToLocalStorage';
import { isTimeExpire } from '../utils/isTimeExpire';

export const useUsers = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    const [error, setError] = useState(false);
    let itemsFromLocalStorage: LocalStorageUsers;


    useEffect(() => {
        itemsFromLocalStorage = JSON.parse(localStorage.getItem('users') || '{}');
        getUsers();
    }, []);

    const getUsers = async () => {
        if (isTimeExpire(itemsFromLocalStorage)) {
            const response = await jsonApi.get('/users');
            if (!response.data.message) {
                setUsers(response.data);
                saveToLocalStorage(response.data);
            } else {
                setError(true);
            }
        } else {
            await setUsers(itemsFromLocalStorage.users);
        }
    };

    return {users, error};
}