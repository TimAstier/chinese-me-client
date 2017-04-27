import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { FlashMessage } from '../../components';
import { getMessages } from '../../redux/flashMessages';

class FlashMessagesList extends Component {
  render() {
    const messages = this.props.messages.map(message =>
      <FlashMessage
        key={message.id}
        message={message}
      />
    );
    return (
      <div>{messages}</div>
    );
  }
}

function mapStateToProps(state) {
  return {
    messages: getMessages(state)
  };
}

FlashMessagesList.propTypes = {
  messages: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(FlashMessagesList);
