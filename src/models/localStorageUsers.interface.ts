import IUser from "./user.interface";

export interface LocalStorageUsers {
    timeToExpire: Date;
    users: IUser[];
}