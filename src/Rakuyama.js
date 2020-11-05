import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Title from './components/Title';

class App extends Component {

  state = {version: '1.0'}

  onClickHandler = () => {

    let titleText = document.getElementById('counter');
    let changeButton = document.getElementById('textChangeButton');
    titleText.textContent = '4.0';

    let nextVersion = parseInt(this.state.version, 10) + 1
    this.setState({version: nextVersion.toFixed(1)})

    //changeButton.style.display = 'none';

  }

  render() {
    return (
      <div>
        <Title
          titleText='Hello World 3.0'
          onClick={this.onClickHandler}
        >
          Hello World
          <span id="counter">
            {this.state.version}
          </span>
        </Title>
        Rakuyama
        <Link to="/">
          <button>
            show Akasaka when you click this!!
          </button>
        </Link>
      </div>
    );
  }
}
export default App;