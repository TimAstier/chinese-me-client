import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { FlashMessage } from '../../components';
import { deleteFlashMessage } from '../../redux/flashMessages';

class FlashMessagesList extends Component {
  render() {
    const messages = this.props.messages.map(message =>
      <FlashMessage
        key={message.id}
        message={message}
        deleteFlashMessage={this.props.deleteFlashMessage}
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
  deleteFlashMessage: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  { deleteFlashMessage }
)(FlashMessagesList);
