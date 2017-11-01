import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { Progressbar as ProgressbarComponent } from '../../components';
import s from '../../rootSelectors';

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
  elementType: s.routing.getElementType(state),
  completion: s.getProgressbarCompletion(state)
});

export default connect(
  mapStateToProps
)(Progressbar);
