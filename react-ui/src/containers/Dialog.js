import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

import { Dialog as DialogComponent } from '../components';
import { actions } from '../redux/dialogs';

class Dialog extends Component {
  componentWillMount() {
    // TODO: Store currentEpisode in the store
    return this.props.fetchDialog(4);
  }

  render() {
    return (
      <DialogComponent />
    );
  }
}

Dialog.propTypes = {
  fetchDialog: propTypes.func.isRequired
};

export default connect(null, { fetchDialog: actions.fetch })(Dialog);
