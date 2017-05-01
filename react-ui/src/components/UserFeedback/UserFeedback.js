import React, { Component, PropTypes } from 'react';
import { Button, Icon } from 'semantic-ui-react';

class UserFeedback extends Component {

  renderMainAction(completed) {
    const onClick = completed ? this.props.next : this.props.saveAndNext;
    const text = completed ? 'Next' : 'Got it!';
    return (
      <Button primary onClick={onClick}>
        <Icon name="external square" />
        {text}
      </Button>
    );
  }

  render() {
    return (
      <div id="user-feedback">
        {this.renderMainAction(this.props.completed)}
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

UserFeedback.propTypes = {
  saveAndNext: PropTypes.func.isRequired,
  next: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired
};

export default UserFeedback;
