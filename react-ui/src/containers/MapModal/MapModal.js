import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { MapModal as MapModalComponent } from '../../components';
import * as models from '../../models';
import selectors from '../../rootSelectors';
import { actions as uiActions } from '../../redux/ui';

class MapModal extends Component {

  render() {
    return <MapModalComponent { ...this.props } />;
  }
}

MapModal.propTypes = {
  open: propTypes.bool.isRequired,
  handleClose: propTypes.func.isRequired,
  characters: propTypes.arrayOf(propTypes.instanceOf(models.Character)),
  grammars: propTypes.arrayOf(propTypes.instanceOf(models.Grammar)),
  dialogs: propTypes.arrayOf(propTypes.instanceOf(models.Dialog))
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
