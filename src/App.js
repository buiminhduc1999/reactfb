import React, { Component } from 'react';
import Login from './pages/public/Login';
import HomePage from './pages/customer/HomePage';
import { Switch, Route } from 'react-router-dom'
import Logout from './pages/public/Logout';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Login}></Route>
      <Route path="/home" component={HomePage}></Route>
      <Route path="/logout" component={Logout}></Route>
    </Switch>
  );
}

export default App;
