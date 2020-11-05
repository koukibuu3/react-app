
import React from 'react';

import Button from './Button/Button';
import { BrowserRouter, Route, Link } from 'react-router-dom';

class Navbar extends React.Component {
  render () {
    return (
      <>
        <Link to="/"><Button value="akasaka" disable="true"/></Link>
        <Link to="/rakuyama"><Button value="rakuyama"/></Link>
        <Link to="/nishizawa"><Button value="nishizawa"/></Link>
      </>
    );
  }
}

const disable = {
  disable: true,
}

export default Navbar;
