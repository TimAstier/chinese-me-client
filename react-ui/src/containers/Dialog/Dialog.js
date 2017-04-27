import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Dialog as DialogComponent } from '../../components';
import { fetch as fetchDialog, getTitle, getLines, getIsFetching }
  from '../../redux/dialog';

class Dialog extends Component {

  render() {
    return (
      <DialogComponent
        fetchDialog={this.props.fetchDialog.bind(this)}
        title={this.props.title}
        lines={this.props.lines}
        isFetching={this.props.isFetching}
        id={Number(this.props.routeParams.id)}
      />
    );
  }
}

Dialog.propTypes = {
  fetchDialog: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  lines: PropTypes.object.isRequired,
  isFetching: PropTypes.bool.isRequired,
  routeParams: PropTypes.object.isRequired
};

function MapStateToProps(state) {
  return {
    title: getTitle(state),
    lines: getLines(state),
    isFetching: getIsFetching(state)
  };
}

export default connect(MapStateToProps, { fetchDialog })(Dialog);
