import { useSelector } from 'react-redux';
import IUser from '../../models/user.interface';
import { addToFavorite } from '../../selectors/selectors';
import FavoriteUser from '../favorite-user/FavoriteUser';

const Favorites = () => {
    const users: IUser[] = useSelector(addToFavorite);

    return (
        <div className="container mt-4" data-auto-id='component-container'>
            <div className="row">
                {users?.map((user: IUser) => (
                    <FavoriteUser user={user} key={user.id} data-auto-id='user-div-row' />
                ))}
            </div>
        </div>
    )
}

export default Favorites
