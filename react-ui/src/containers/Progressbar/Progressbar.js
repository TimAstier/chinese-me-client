import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { Progressbar as ProgressbarComponent } from '../../components';
import selectors from '../../rootSelectors';

class Progressbar extends Component {

  render() {
    const { completionPercentage } = this.props;
    if (!completionPercentage && completionPercentage !== 0) {
      return null;
    }
    return (
      <ProgressbarComponent
        completionPercentage={this.props.completionPercentage}
      />
    );
  }
}

Progressbar.propTypes = {
  completionPercentage: propTypes.number
};

const mapStateToProps = state => ({
  completionPercentage: selectors.getCompletionPercentage(state)
});

export default connect(
  mapStateToProps
)(Progressbar);
