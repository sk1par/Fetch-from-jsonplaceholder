import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router'
import jsonApi from '../../api/jsonApi';

interface User {
    email: string;
    id: number;
    name: string;
    phone: string;
    username: string;
    website: string;
  }

  interface ParamTypes {
    id: string
  }

const UserPreview = () => {
    const history = useHistory();
    const { id } = useParams<ParamTypes>()
    const [user, setUser] = useState<User>();

    const getUser = async () => {
        const response = await jsonApi.get(`/users/${id}`);
        setUser(response.data);
      };

    useEffect(() => {
        getUser();
    }, []);

    return (
        <div className="card" style={{width: "25rem", margin: "auto"}}>
            <div className="card-body">
                <h5 className="card-title">Name: {user?.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">Username: {user?.username}</h6>
                <a href="#" className="card-link">{user?.phone}</a>
                <a href="#" className="card-link">{user?.email}</a>
            </div>
            <div className='button-div'>
             <button type="button" style={{marginBottom: '5px'}} className="btn btn-outline-primary"
             onClick={() => history.push('/')}>Return to Homepage</button>
          </div>
        </div>
    )
}

export default UserPreview
