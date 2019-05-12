import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import StartPage from './main/pages/startPage/StartPage';
import HeaderPage from './main/pages/header/HeaderPage';
import RegisterPage from './main/pages/registerPage/RegisterPage';
import LoginPage from './main/pages/loginPage/LoginPage';
import ListPage from './main/listPage/ListPage';
import LoadingPage from './main/pages/loadingPage/LoadingPage';

class App extends Component {
  render() {
    return (
      <div className="container">
        <HeaderPage />
        <Route exact path="/" component={LoadingPage} />
        <Route exact path="/start" component={StartPage} />
        <Route exact path="/list/:id" component={StartPage} />
        <Route exact path="/register" component={RegisterPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/lists" component={ListPage} />
      </div>
    );
  }
}

export default App;
