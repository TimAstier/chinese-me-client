import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { ScrollableWrapper as ScrollableWrapperComponent } from '../../components';
import s from '../../rootSelectors';

class ScrollableWrapper extends Component {
  render() {
    return (
      <ScrollableWrapperComponent { ...this.props } />
    );
  }
}

ScrollableWrapper.propTypes = {
  scrollPosition: propTypes.number.isRequired
};

const mapStateToProps = state => ({
  scrollPosition: s.ui.getScrollPosition(state)
});

export default connect(
  mapStateToProps
)(ScrollableWrapper);
