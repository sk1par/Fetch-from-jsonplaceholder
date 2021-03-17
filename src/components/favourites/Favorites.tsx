import React from 'react'
import { useSelector } from 'react-redux';
import IUser from '../../models/user.interface';
import { addToFavorite } from '../../selectors/selectors';
import FavoriteUser from '../favorite-user/FavoriteUser';

const Favorites = () => {
    const users: IUser[] = useSelector(addToFavorite);
    console.log(useSelector(addToFavorite));

    return (
        <div className="container mt-4">
            <div className="row">
                {users?.map((user: IUser) => (
                    <FavoriteUser user={user} key={user.id} />
                ))}
            </div>
        </div>
    )
}

export default Favorites
