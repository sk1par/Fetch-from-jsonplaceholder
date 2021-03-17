import React from 'react'
import IUser from '../../models/user.interface'

interface User {
    user: IUser;
};

const FavoriteUser = ({user}: User) => {
    return (
        <div className="col-auto mb-3">
            <div className="card" style={{width: '18rem'}}>
                <div className="card-body">
                    <h5 className="card-title">Name:{user?.name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Username: {user?.username}</h6>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href={"tel:" + user?.phone} className="card-link">{user?.phone}</a><br />
                        <a href={"mailto:" + user?.email} className="card-link">{user?.email}</a>
                </div>
            </div>
        </div>
    )
}

export default FavoriteUser