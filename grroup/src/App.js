import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    /*<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>*/

    <React.Fragment>
      <div className="people_container">
      <div className="photo_container">
        <img src="static/thomas.jpg" />
      </div>
      <div className="name">
        Thomas Kunc
      </div>
      </div>
    </React.Fragment>
  );
}

export default App;
