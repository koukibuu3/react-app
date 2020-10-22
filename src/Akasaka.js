import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const Akasaka = () => {
  return (
    <div>
      Akasaka
      <Link to="/pagetwo">
        <button>
          show Nishizawa when you click this!!
        </button>
      </Link>
    </div>
  );
};

export default Akasaka;
