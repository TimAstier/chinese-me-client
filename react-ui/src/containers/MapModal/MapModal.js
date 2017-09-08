import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { MapModal as MapModalComponent } from '../../components';
import selectors from '../../rootSelectors';
import { actions as uiActions } from '../../redux/ui';

class MapModal extends Component {

  render() {
    return <MapModalComponent { ...this.props } />;
  }
}

MapModal.propTypes = {
  open: propTypes.bool.isRequired,
  handleClose: propTypes.func.isRequired
};

const mapStateToProps = state => ({
  open: selectors.getOpenMapModal(state)
});

export default connect(
  mapStateToProps,
  {
    handleClose: uiActions.closeMapModal
  }
)(MapModal);
