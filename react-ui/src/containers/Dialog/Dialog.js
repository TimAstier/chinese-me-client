import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Dialog as DialogComponent } from '../../components';
import { get as getDialog } from '../../redux/dialogs';

class Dialog extends Component {

  render() {
    return (
      <DialogComponent
        getDialog={this.props.getDialog.bind(this)}
        dialog={this.props.dialog}
        lines={this.props.lines}
        isFetching={this.props.isFetching}
        id={Number(this.props.routeParams.id)}
      />
    );
  }
}

Dialog.propTypes = {
  getDialog: PropTypes.func.isRequired,
  dialog: PropTypes.object.isRequired,
  lines: PropTypes.object.isRequired,
  isFetching: PropTypes.bool.isRequired,
  routeParams: PropTypes.object.isRequired
};

function MapStateToProps(state) {
  return {
    dialog: state.get('dialogs').get('dialog'),
    lines: state.get('dialogs').get('lines'),
    isFetching: state.get('dialogs').get('isFetching')
  };
}

export default connect(MapStateToProps, { getDialog })(Dialog);
