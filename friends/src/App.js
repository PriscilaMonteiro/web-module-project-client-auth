import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Theme from './components/pages/Products';
import Logout from './components/pages/Logout';
import Login from './components/pages/Login';
import AddFriendForm from './components/pages/AddFriendForm';
import Friends from './components/pages/Friends';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        
        <Route path='/services' component={Services} />
        <Route path='/products' component={Theme} />
        <Route path='/logout' component={Logout} />
        <Route path='/login' component={Login} />
        <Route path='/add-new' component={AddFriendForm} />
        <PrivateRoute path='/friends' component={Friends} />
        <Route path='/' exact component={Home} />
      </Switch>
    </Router>
  );
}

export default App;