import React, { Component } from 'react';
// import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { Progressbar as ProgressbarComponent } from '../../components';

class Progressbar extends Component {

  render() {
    return (
      <ProgressbarComponent
        completionPercentage={75}
      />
    );
  }
}

// Progressbar.propTypes = {};

export default connect()(Progressbar);
