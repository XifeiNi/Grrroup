import React from 'react';
import logo from './Thomas.jpg';
import './App.css';

const people = React.createElement;

class People extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      tasks: new Array(),
      liked: false 
    };
  }

  
  render() {
    return (
    <React.Fragment>
      <div className="people_container">
      <div className="photo_container">
        <img src={logo} />
      </div>
      <div className="name">
        Thomas Kunc
      </div>
      </div>
    </React.Fragment>
    );
  }
}
