import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div>
      Rakuyama
      <Link to="/">
        <button>
          show Akasaka when you click this!!
        </button>
      </Link>
    </div>
  );
}
export default App;