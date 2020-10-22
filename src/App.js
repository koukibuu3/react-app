// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Rakuyama from './Rakuyama';
import Akasaka from './Akasaka';

import Button from './components/Button';

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

// class App extends React.Component

const App = () => {

  const hoge = () => {
    console.log('hoge');
  };

  return (
    <div>
      <BrowserRouter>
        {/* ↓ Routes.js みたいに切り出して良いかも */}
        <div>
          <Route path="/" exact component={Akasaka} />
          <Route path="/pagetwo"  component={Nishizawa} />
          <Route path="/rakuyama"  component={Rakuyama} />
        </div>
        <button onClick={hoge}>say hoge</button>
        <Button value='hogeo!!!'/>
      </BrowserRouter>
    </div>
  );
};
export default App;


/**
 * 画面遷移
 * https://qiita.com/kuropp/items/0490c26f85bcdd181cb1
 *
 * 必要なパッケージ
 * npm install --save react-router-dom
 *
 **/

// わからないことメモ
//
// export と export default の違い
// const App () => {} と
// class App () extends React.components の違い
// ↓
// componentの中でも２つのカテゴリー（class component と functional component）があって、それぞれ定義の仕方が違う

// https://note.com/natsukingdom/n/n2dd88d531f22
