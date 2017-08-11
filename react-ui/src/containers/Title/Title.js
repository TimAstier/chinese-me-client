import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { Title as TitleComponent } from '../../components';
import selectors from '../../rootSelectors';

class Title extends Component {

  render() {
    return (
      <TitleComponent { ...this.props } />
    );
  }
}

Title.propTypes = {
  partNumber: propTypes.number.isRequired,
  title: propTypes.string.isRequired
};

const mapStateToProps = state => ({
  title: selectors.getTitle(state),
  partNumber: selectors.getPartNumber(state)
});

export default connect(
  mapStateToProps
)(Title);
