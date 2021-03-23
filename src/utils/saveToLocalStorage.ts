import IUser from "../models/user.interface";

const saveToLocalStorage = (users: IUser[]) => {
    const objForLocalStorage = {
        timeToExpire: new Date(),
        users: users
    }
    localStorage.setItem('users', JSON.stringify(objForLocalStorage));
};

export default saveToLocalStorage;