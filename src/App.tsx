import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/home/Home';
import UserList from './components/user-list/UserList';
import UserPreview from './components/user-preview/UserPreview';


function App() {
  return (
    <Router>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/user-list" component={UserList}></Route>
          <Route path="/user/:id" component={UserPreview}></Route>
        </Switch>
    </Router>
  );
}

export default App;
