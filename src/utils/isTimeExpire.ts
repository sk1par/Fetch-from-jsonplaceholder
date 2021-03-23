import { LocalStorageUsers } from '../models/localStorageUsers.interface';
import { checkTimes } from '../utils/utils';

export const isTimeExpire = (itemsFromLocalStorage: LocalStorageUsers) => {
    return ((!itemsFromLocalStorage.users && !itemsFromLocalStorage.timeToExpire) ||
    (checkTimes(itemsFromLocalStorage) && (itemsFromLocalStorage.users && itemsFromLocalStorage.timeToExpire)))
}