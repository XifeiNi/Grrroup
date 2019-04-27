import React from 'react';
import logo from './Thomas.jpg';
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
    
    /*<React.Fragment>
      <div className="people_container">
      <div className="photo_container">
        <img src={logo} />
      </div>
      <div className="name">
        Thomas Kunc
      </div>
      </div>
    </React.Fragment>*/
    
    <React.Fragment>

      <div id="board" className="fancy-scroll-bar">
        <div className="list-wrapper"> 
          <div className="list js-list-content"> 
            <div className="list-header"> 
              <div className="list-header-target">
              </div>
              <textarea id="input"
              maxLength="512"
              className="list-header-name mod-list-name js-list-name-input"> 
              To do
              </textarea>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
