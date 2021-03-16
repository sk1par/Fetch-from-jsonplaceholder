import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import jsonApi from '../../api/jsonApi';
import User from '../user/User';
;

interface IUser {
    email: string;
    id: number;
    name: string;
    phone: string;
    username: string;
    website: string;
  }

const UserList = () => {
    const history = useHistory();
    const [users, setUsers] = useState([]);

    const getUsers = async () => {
      const response = await jsonApi.get('/users')
      setUsers(response.data);
    };

    return (
        <div className="container">
        <div className="col-xs-8">
          <h1 className='title'>React Users App</h1>
          <div className='button-div'>
          <button type="button" className="btn btn-outline-primary"
             onClick={() => history.push('/')} style={{ marginBottom: "10px", marginRight: "10px" }}>Home Page</button>
            <button type="button" className="btn btn-outline-primary" onClick={getUsers} style={{ marginBottom: "10px" }}>Get Users</button>
          </div>
          {users.map((user: IUser) => (
            <Link to={`/user/${user.id}`} key={user.id}>
              <User user={user} />
            </Link>

          ))}
        </div>
      </div>
    )
}

export default UserList
