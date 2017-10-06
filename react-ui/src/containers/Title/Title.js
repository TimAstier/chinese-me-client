import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { Title as TitleComponent } from '../../components';
import selectors from '../../rootSelectors';

class Title extends Component {

  render() {
    const partNumber = this.props.currentUrl.split('/')[4];
    return (
      <TitleComponent
        partNumber={partNumber}
      />
    );
  }
}

Title.propTypes = {
  currentUrl: propTypes.string.isRequired
};

const mapStateToProps = state => ({
  currentUrl: selectors.getCurrentUrl(state)
});

export default connect(
  mapStateToProps
)(Title);
