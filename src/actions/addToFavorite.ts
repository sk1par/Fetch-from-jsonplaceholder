import IUser from "../models/user.interface";

const history = (user: IUser) => {
    return {
        type: 'ADD_FAVORITE',
        payload: user
    }
}

export default history;