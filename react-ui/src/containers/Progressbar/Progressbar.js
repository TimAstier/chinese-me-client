import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { Progressbar as ProgressbarComponent } from '../../components';
import selectors from '../../rootSelectors';

class Progressbar extends Component {

  render() {
    return (
      <ProgressbarComponent
        completionPercentage={this.props.completion}
      />
    );
  }
}

Progressbar.propTypes = {
  elementType: propTypes.string.isRequired,
  completion: propTypes.number
};

const mapStateToProps = state => ({
  elementType: selectors.getElementType(state),
  completion: selectors.getProgressbarCompletion(state)
});

export default connect(
  mapStateToProps
)(Progressbar);
