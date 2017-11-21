import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import * as models from '../../../models';
import { bookComponents as c } from '../../../components';
import { default as s } from '../../../rootSelectors';

class Dialog extends Component {

  render() {
    const { dialog, options } = this.props;
    return (
      <c.Dialog
        statements={dialog ? dialog.statements : undefined }
        avatars={this.props.avatars}
        displayNames={options.displayNames ? options.displayNames : false}
        sentenceType={options.sentenceType}
        dialogId={this.props.dialogId}
      />
    );
  }
}

Dialog.propTypes = {
  dialogId: propTypes.number.isRequired,
  dialog: propTypes.instanceOf(models.Dialog),
  options: propTypes.shape({
    sentenceType: propTypes.oneOf(['chinese', 'translation']),
    displayNames: propTypes.bool
  }).isRequired
};

const mapStateToProps = (state, ownProps) => ({
  dialog: s.entities.getDialogs(state).get(String(ownProps.dialogId))
});

export default connect(
  mapStateToProps
)(Dialog);
