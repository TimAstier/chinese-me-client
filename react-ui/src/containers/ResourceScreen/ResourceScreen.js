import React, { Component, PropTypes } from 'react';

class ResourceScreen extends Component {

  // TODO: Reset resources stores

  render() {
    return (
      <div id="resource-screen">
        <div id="main-content">
          {this.props.children}
        </div>
      </div>
    );
  }
}

ResourceScreen.propTypes = {
  children: PropTypes.node
};

export default ResourceScreen;
