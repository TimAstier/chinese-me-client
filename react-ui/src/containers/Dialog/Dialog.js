import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Dialog as DialogComponent } from '../../components';
import { get as getDialog } from '../../redux/dialog';

class Dialog extends Component {

  render() {
    return (
      <DialogComponent
        getDialog={this.props.getDialog.bind(this)}
        title={this.props.title}
        lines={this.props.lines}
        isFetching={this.props.isFetching}
        id={Number(this.props.routeParams.dialogId)}
      />
    );
  }
}

Dialog.propTypes = {
  getDialog: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  lines: PropTypes.object.isRequired,
  isFetching: PropTypes.bool.isRequired,
  routeParams: PropTypes.object.isRequired
};

function MapStateToProps(state) {
  const dialogState = state.get('dialog');
  return {
    title: dialogState.get('title'),
    lines: dialogState.get('lines'),
    isFetching: dialogState.get('isFetching')
  };
}

export default connect(MapStateToProps, { getDialog })(Dialog);
