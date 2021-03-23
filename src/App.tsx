import { BrowserRouter as Router, Route, Switch, useHistory } from 'react-router-dom';
import Home from './components/home/Home';
import Navigation from './components/navigation/Navigation';
import UserList from './components/user-list/UserList';
import UserPreview from './components/user-preview/UserPreview';
import Favorites from './components/favourites/Favorites';
import Register from './components/register/Register';
import Login from './components/login/Login';
import GuardedRoute from './components/GuardedRoute/GuardedRoute';


function App() {
  return (
    <Router>
        <Navigation />
        <Switch>
          <GuardedRoute path="/home"  component={Home} />
          <GuardedRoute path="/user-list" component={UserList} />
          <GuardedRoute path="/user/:id" component={UserPreview} />
          <GuardedRoute path="/favorites" component={Favorites} />
          <Route path='/register' component={Register}></Route>
          <Route path='/' component={Login}></Route>
        </Switch>
    </Router>
  );
}

export default App;
