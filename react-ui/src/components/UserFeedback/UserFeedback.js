import React, { Component } from 'react';
import { Button, Icon } from 'semantic-ui-react';

class UserFeedback extends Component {

  render() {
    return (
      <div id="user-feedback">
        <Button primary>
          <Icon name="external square" />
          Continue
        </Button>
        <Button secondary>
          <Icon name="help circle" />
          Ask question
        </Button>
        <Button basic>
          <Icon name="send" />
          Report error
        </Button>
        <Button basic>
          <Icon name="bug" />
          Report bug
        </Button>
      </div>
    );
  }
}

UserFeedback.propTypes = {};

export default UserFeedback;
