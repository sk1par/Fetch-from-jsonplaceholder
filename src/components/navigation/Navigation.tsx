import React from 'react'
import { useHistory } from 'react-router';

const Navigation = () => {
    const history = useHistory();

    return (
        <>
            <div>
                <h1 className='title'>React Users App</h1>
            </div>
            <div className='button-div' style={{ marginTop: "10px" }}>
                <button type="button"
                    className="btn btn-outline-primary"
                    onClick={() => history.push('/')}
                    style={{ marginBottom: "10px", marginRight: "10px" }}>
                    Home Page
                </button>
                <button type="button"
                    className="btn btn-outline-primary"
                    onClick={() => history.push('user-list')}
                    style={{ marginBottom: "10px" }}>
                    Get Users
                </button>
                <button type="button"
                    className="btn btn-outline-primary"
                    onClick={() => history.push('/favorites')}
                    style={{ marginBottom: "10px", marginLeft: '10px' }}>
                    Favorites Users
                </button>
            </div>
            <hr />
        </>
    )
}

export default Navigation
