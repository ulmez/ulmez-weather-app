import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import axios from 'axios';

import StartPage from './main/pages/startPage/StartPage';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      test: ''
    };
  }

  componentDidMount() {
    this.getMessage();
  }

  getMessage() {
    axios.get('/tests/test')
    .then((res) => {
        console.log(res.data);
        this.setState({
          test: res.data
        });
    })
    .catch((err) => {
        console.log(err);
    });
  }

  render() {
    return (
      <div className="container">
        <Route exact path="/" component={StartPage} />
      </div>
    );
  }
}

export default App;
