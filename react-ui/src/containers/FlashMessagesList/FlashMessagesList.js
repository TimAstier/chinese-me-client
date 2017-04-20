import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { FlashMessage } from '../../components';

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
    messages: state.get('flashMessages').toJS()
  };
}

FlashMessagesList.propTypes = {
  messages: PropTypes.array.isRequired,
};

export default connect(mapStateToProps)(FlashMessagesList);
