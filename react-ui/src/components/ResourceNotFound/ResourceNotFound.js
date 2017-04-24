import React, { Component } from 'react';
import { Message } from 'semantic-ui-react';

class ResourceNotFound extends Component {

  render() {
    const items = [
      'The web URL is incorrect.',
      'The location of this resource has been changed.',
      'This resource was removed.'
    ];
    return (
      <div id="resource-not-found" className="center">
        <Message info>
          <Message.Header>Sorry, we could not find this resource.</Message.Header>
          <p>Here are a few reasons why this might be happening:</p>
          <Message.List items={items} />
        </Message>
      </div>
    );
  }
}

ResourceNotFound.propTypes = {};

export default ResourceNotFound;
