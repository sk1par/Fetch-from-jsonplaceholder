import React from 'react'


const User = ({ user }: any) => {
    return (
        <div className="card">
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
