import { useHistory } from 'react-router';

const Home = () => {
    const history = useHistory();

    return (
        <div className="container">
        <div className="col-xs-8">
          <h1 className='title'>React Users App</h1>
          <div className='button-div'>
             <button type="button" className="btn btn-outline-primary"
             onClick={() => history.push('/user-list')}>User List</button>
          </div>
        </div>
      </div>
    )
}

export default Home
