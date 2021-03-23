import { Link } from 'react-router-dom';
import User from '../user/User';
import IUser from '../../models/user.interface';
import { useDispatch } from 'react-redux';
import { setSelectedUser } from '../../actions';
import {useUsers} from '../../hooks/useUsers';
import ErrorMessage from '../error-message/ErrorMessage';


const UserList = () => {
  const users = useUsers();
  const dispatch = useDispatch();

  const selectUser = (user: IUser) => {
    dispatch(setSelectedUser(user));
  };
  
  return (
    !users.error ? (
      <div className="container" data-auto-id='user-list-div'>
      <div className="col-xs-8">
        {users.users?.map((user: IUser) => (
          <div onClick={() => selectUser(user)} key={user.id} data-auto-id='user-element-div'>
            <Link to={`/user/${user.id}`}>
              <User user={user} />
            </Link>
          </div>
        ))}
      </div>
    </div>
    ) : (<ErrorMessage />)
  )
}

export default UserList
