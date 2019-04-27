'use strict';

const e = React.createElement;

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
      <div class="photo_container">
        <img src="static/thomas.jpg" />
      </div>
      <div class="name">
        Thomas Kunc
      </div>
      </React.Fragment>

    );
  }
}

// Find all DOM containers, and render Like buttons into them.
document.querySelectorAll('.people_container')
  .forEach(domContainer => {
    // Read the comment ID from a data-* attribute.
    const nameID = domContainer.dataset.name
    ReactDOM.render(
      e(People, { nameID: nameID }),
      domContainer
    );
  });