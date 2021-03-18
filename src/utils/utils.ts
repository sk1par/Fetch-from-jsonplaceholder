import { LocalStorageUsers } from "../models/localStorageUsers.interface";

export const checkTimes = (itemsFromLocalStorage: LocalStorageUsers) => {
    const timeNow = new Date();
    timeNow.setMinutes(timeNow.getMinutes() - 5);
    const timeFromLocalStorage: Date = itemsFromLocalStorage?.timeToExpire;
    return timeFromLocalStorage && (timeNow.getTime() > new Date(itemsFromLocalStorage?.timeToExpire).getTime());
};