import React from 'react';
import { NavigationBar } from '../';
import { FlashMessagesList } from '../';

class App extends React.Component {
  render() {
    return (
      <div id="app">
        <NavigationBar pathname={this.props.location.pathname} />
        <FlashMessagesList />
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.object.isRequired,
  location: React.PropTypes.object.isRequired
};

export default App;
