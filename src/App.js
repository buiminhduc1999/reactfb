import React, { Component } from 'react';

import HomePage from './pages/customer/HomePage';
import { Switch, Route } from 'react-router-dom'
import Login from './screens/LoginScreen';
import Logout from './screens/LoginScreen/Logout';

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
