import { useDispatch, useSelector } from 'react-redux';
import { addToFavorite } from '../../actions';
import IUser from '../../models/user.interface';
import { selectUser } from '../../selectors/selectors';

const UserPreview = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const addToFavorites = () => {
    dispatch(addToFavorite(user));
};

  return (
    <div className="card" style={{ width: "25rem", margin: "auto" }}>
      <div className="card-body">
        <h5 className="card-title">Name: {user?.name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">Username: {user?.username}</h6>
        <a href={"tel:" + user?.phone} className="card-link">{user?.phone}</a>
        <a href={"mailto:" + user?.email} className="card-link">{user?.email}</a>
      </div>
      <div className='button-div'>
        <button type="button" style={{ marginBottom: '5px' }} className="btn btn-outline-success"
          onClick={addToFavorites}>Add to Favorites</button>
      </div>
    </div>
  )
}

export default UserPreview
