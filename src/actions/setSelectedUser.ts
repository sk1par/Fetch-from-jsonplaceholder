import IUser from "../models/user.interface";

const setSelectedUser= (user?: IUser) => {
    return {
        type: 'SELECTED_USER',
        payload: user
    }
}

export default setSelectedUser;