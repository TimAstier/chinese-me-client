import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Button } from 'semantic-ui-react';

class App extends Component {
  render() {
    return (
      <div id="app">
        <Button primary>
          Click Here
        </Button>
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object,
  location: PropTypes.object.isRequired
};

export default App;
