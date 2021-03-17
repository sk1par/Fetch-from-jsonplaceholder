import IUser from "../models/user.interface";

const selectedUser = (user?: IUser) => {
    return {
        type: 'SELECTED_USER',
        payload: user
    }
}

export default selectedUser;