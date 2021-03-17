import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/home/Home';
import Navigation from './components/navigation/Navigation';
import UserList from './components/user-list/UserList';
import UserPreview from './components/user-preview/UserPreview';
import Favorites from './components/favourites/Favorites';


function App() {
  return (
    <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/user-list" component={UserList}></Route>
          <Route path="/user/:id" component={UserPreview}></Route>
          <Route path="/favorites" component={Favorites}></Route>
        </Switch>
    </Router>
  );
}

export default App;
