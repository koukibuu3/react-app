import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import Button from './components/Button/Button';
import Navbar from './components/Navbar';

class Akasaka extends React.Component {
  render() {
    return (
      <>
        <h1>This is Akasaka Page.</h1>
        <Link to="/nishizawa">
          <Button value="show Nisizawa"/>
        </Link>
        <Navbar/>
      </>
    );
  }
};

export default Akasaka;
