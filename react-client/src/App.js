import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import axios from 'axios';

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
        <div className="row">
          <div className="col">Hello World 1</div>
          <div className="col cursive-text">Hello World 2</div>
          <div className="col">Hello World 3</div>
          <div className="col">Hello World 4</div>
        </div>
      </div>
    );
  }
}

export default App;
