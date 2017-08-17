import React, { Component } from 'react';
import propTypes from 'prop-types';
import { MapModal as MapModalComponent } from '../../components';

class MapModal extends Component {

  render() {
    return <MapModalComponent { ...this.props } />;
  }
}

MapModal.propTypes = {};

export default MapModal;
