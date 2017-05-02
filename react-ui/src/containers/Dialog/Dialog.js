import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Dialog as DialogComponent } from '../../components';
import { fetch as fetchDialog, getTitle, getLines, getIsFetching }
  from '../../redux/dialog';
import { selectors as resourcesSelectors } from '../../redux/study';

class Dialog extends Component {

  render() {
    // When mounted from study route, id is defined from props
    // When mounted from resource route, id is defined from params
    return (
      <DialogComponent
        fetchDialog={this.props.fetchDialog.bind(this)}
        title={this.props.title}
        lines={this.props.lines}
        isFetching={this.props.isFetching}
        id={this.props.id || this.props.params.id}
      />
    );
  }
}

Dialog.propTypes = {
  fetchDialog: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  lines: PropTypes.object.isRequired,
  isFetching: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
  params: PropTypes.object
};

function MapStateToProps(state) {
  return {
    title: getTitle(state),
    lines: getLines(state),
    isFetching: getIsFetching(state),
    id: resourcesSelectors.getResourceId(state)
  };
}

export default connect(MapStateToProps, { fetchDialog })(Dialog);
