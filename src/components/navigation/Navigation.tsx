import axios from 'axios';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { setAuth } from '../../selectors/selectors';

const Navigation = () => {
    const history = useHistory();
    const isAuth = useSelector(setAuth);

    const logout = () => {
        axios({
            method: 'get',
            withCredentials: true,
            url: 'http://localhost:4000/logout'
        }).then((res) => {
                history.push('/');
        });
    };

    const navigateToRegister = () => {
        history.push('/register');
    };

    return (
        <>
            <div>
                <h1 className='title'>React Users App</h1>
            </div>
            <div className='button-div' style={{ marginTop: "10px" }}>
                <button type="button"
                    className="btn btn-outline-primary"
                    onClick={() => history.push('/home')}
                    style={{ marginBottom: "10px", marginRight: "10px" }}>
                    Home Page
                </button>
                <button type="button"
                    className="btn btn-outline-primary"
                    onClick={() => history.push('/user-list')}
                    style={{ marginBottom: "10px" }}>
                    Get Users
                </button>
                <button type="button"
                    className="btn btn-outline-primary"
                    onClick={() => history.push('/favorites')}
                    style={{ marginBottom: "10px", marginLeft: '10px' }}>
                    Favorites Users
                </button>
                <button type="button"
                    className="btn btn-outline-primary"
                    onClick={ isAuth ? logout : navigateToRegister}
                    style={{ marginBottom: "10px", marginLeft: '10px' }}>
                    {isAuth ? 'Logout' : 'Register'}
                </button>
            </div>
            <hr />
        </>
    )
}

export default Navigation
