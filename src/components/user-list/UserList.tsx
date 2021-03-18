import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import jsonApi from '../../api/jsonApi';
import User from '../user/User';
import IUser from '../../models/user.interface';
import { useDispatch } from 'react-redux';
import { setSelectedUser } from '../../actions';
import {useUsers} from '../../hooks/useUsers';
import {checkTimes} from '../../utils/utils';
import {LocalStorageUsers} from '../../models/localStorageUsers.interface';


const UserList = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [localStorageUsers, setLocalStorageUsers] = useUsers('users', []);
  const dispatch = useDispatch();
  let itemsFromLocalStorage: LocalStorageUsers;

  const selectUser = (user: IUser) => {
    dispatch(setSelectedUser(user));
  };

  useEffect(() => {
    itemsFromLocalStorage = JSON.parse(localStorage.getItem('users') || '{}');
    getUsers();
  }, []);

  const getUsers = async () => {
    if ((!itemsFromLocalStorage.users && !itemsFromLocalStorage.timeToExpire) ||
      (checkTimes(itemsFromLocalStorage) && (itemsFromLocalStorage.users && itemsFromLocalStorage.timeToExpire))) {
      const response = await jsonApi.get('/users')
      setUsers(response.data);
      setLocalStorageUsers(response.data);
    } else {
      await setUsers(localStorageUsers.users);
    }

  };

  return (
    <div className="container">
      <div className="col-xs-8">
        {users?.map((user: IUser) => (
          <div onClick={() => selectUser(user)} key={user.id}>
            <Link to={`/user/${user.id}`}>
              <User user={user} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default UserList
