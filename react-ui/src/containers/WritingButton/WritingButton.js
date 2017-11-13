import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { WritingButton as WritingButtonComponent } from '../../components';
import { push } from 'react-router-redux';

class WritingButton extends Component {

  _url = () => `/study/10/character/${this.props.characterId}/strokeQuiz`;

  render() {
    return (
      <WritingButtonComponent
        onClick={() => {
          return this.props.push(this._url());
        }}
      />
    );
  }
}

WritingButton.propTypes = {
  characterId: propTypes.number.isRequired,
  push: propTypes.func.isRequired
};

export default connect(
  null,
  {
    push
  }
)(WritingButton);
