import React from 'react';
import NavigationBar from '../navigationBar/containers/NavigationBar';
import FlashMessagesList from './flash/FlashMessagesList';

class App extends React.Component {
  render() {
    return (
      <div id="main-container">
        <NavigationBar
          pathname={this.props.location.pathname}
        />
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
