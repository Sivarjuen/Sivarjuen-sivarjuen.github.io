import React from 'react';
import '../index.css';

import {NavBar} from '../components/NavBar';
import {Header} from '../components/Header';
import {HomePage} from '../pages/HomePage'

function App() {
  return (
    <div className="App">
      <body>
        <Header />
        <NavBar />
          
        <div className="Page">
          <HomePage />
        </div>
      </body>
    </div>
  );
}

export default App;
