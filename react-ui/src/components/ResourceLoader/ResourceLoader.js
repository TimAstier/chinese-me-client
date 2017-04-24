import React, { Component } from 'react';
import { Loader, Segment, Dimmer } from 'semantic-ui-react';

class ResourceLoader extends Component {

  render() {
    return (
      <Segment>
        <Dimmer active>
          <Loader content="Loading" size="big"/>
        </Dimmer>
      </Segment>
    );
  }
}

ResourceLoader.propTypes = {};

export default ResourceLoader;
