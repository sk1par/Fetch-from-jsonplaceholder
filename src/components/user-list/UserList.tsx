import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import jsonApi from '../../api/jsonApi';
import User from '../user/User';
import IUser from '../../models/user.interface';
import { useDispatch } from 'react-redux';
import { selectedUser } from '../../actions';

interface LocalStorageUsers {
  timeToExpire: Date;
  users: IUser[];
}

const UserList = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const itemsFromLocalStorage: LocalStorageUsers = JSON.parse(localStorage.getItem('users') || '{}');
  const dispatch = useDispatch();

  const selectUser = (user: IUser) => {
    dispatch(selectedUser(user));
  };


  useEffect(() => {
    getUsers();
  }, []);

  const checkTimes = () => {
    const timeNow = new Date();
    timeNow.setMinutes(timeNow.getMinutes() - 5);
    const timeFromLocalStorage: Date = itemsFromLocalStorage?.timeToExpire;
    if (timeFromLocalStorage && (timeNow.getTime() > new Date(itemsFromLocalStorage?.timeToExpire).getTime())) {
      return true
    } else {
      return false;
    }
  };

  const getUsers = async () => {
    if ((!itemsFromLocalStorage.users && !itemsFromLocalStorage.timeToExpire) ||
      (checkTimes() && (itemsFromLocalStorage.users && itemsFromLocalStorage.timeToExpire))) {
      const response = await jsonApi.get('/users')
      setUsers(response.data);
      saveToLocalStorage(response.data);
    } else {
      await setUsers(itemsFromLocalStorage.users);
    }

  };

  const saveToLocalStorage = (users: IUser[]) => {
    const objForLocalStorage = {
      timeToExpire: new Date(),
      users: users
    }
    localStorage.setItem('users', JSON.stringify(objForLocalStorage));
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
