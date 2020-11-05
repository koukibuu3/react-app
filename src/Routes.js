import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

// screens
import Akasaka from './Akasaka';
import Rakuyama from './Rakuyama';
const Nishizawa = () => {
  return (
    <div>
      Nishizawa
      <Link to="/rakuyama">
        <button>
          show Rakuyama when you click this!!
        </button>
      </Link>
    </div>
  );
};

const Routes = () => {
  return (
    <BrowserRouter>
      <div>
        <Route path="/" exact component={Akasaka} />
        <Route path="/rakuyama" component={Rakuyama} />
        <Route path="/nishizawa" component={Nishizawa} />
      </div>
    </BrowserRouter>
  );
}

export default Routes;
