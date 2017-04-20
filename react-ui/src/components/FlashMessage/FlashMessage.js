import React, { Component, PropTypes } from 'react';
import { Message } from 'semantic-ui-react';

class FlashMessage extends Component {

  render() {
    const { type, text } = this.props.message;
    let color = '';
    switch (type) {
      case 'success':
        color = 'green';
        break;
      case 'error':
        color = 'red';
        break;
      default:
        color = 'blue';
    }
    return (
      <div className="flashmessage">
        <Message color={color}>{text}</Message>
      </div>
    );
  }
}

FlashMessage.propTypes = {
  message: PropTypes.object.isRequired
};

export default FlashMessage;
