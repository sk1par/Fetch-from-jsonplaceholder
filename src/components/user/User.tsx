import { useDispatch } from 'react-redux';
import { setSelectedUser } from '../../actions';
import IUser from '../../models/user.interface';

interface User {
    user: IUser;
}

const User = ({ user }: User) => {
    const dispatch = useDispatch();

    const selectUser = () => {
        dispatch(setSelectedUser(user));
    };

    return (
        <div className="card" onClick={selectUser}>
            <div className="card-body">
                <h5 className="card-title">{user?.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                    {user?.email}
                </h6>
            </div>
        </div>
    )
}

export default User
