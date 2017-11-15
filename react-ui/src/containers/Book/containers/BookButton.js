import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { bookComponents as c } from '../../../components';
import { push } from 'react-router-redux';
// import handWithPen from '../../../images/handWithPen.png';
import dialogIcon from '../../../images/dialogIcon.png';
import brushIcon from '../../../images/brushIcon.png';
import storyIcon from '../../../images/storyIcon.png';

class BookButton extends Component {

  _options = () => {
    switch (this.props.buttonOptions.type) {
      case 'writing':
        return {
          url: `/study/10/character/${this.props.buttonOptions.data.elementId}/writing`,
          image: brushIcon
        };
      case 'dialog':
        return {
          url: `/study/10/dialog/${this.props.buttonOptions.data.elementId}/listen`,
          image: dialogIcon
        };
      case 'story':
        return {
          url: `/study/10/character/${this.props.buttonOptions.data.elementId}/etymology`,
          image: storyIcon
        };
      default:
        return console.log('Unkown bookButton type');
    }
  }

  render() {
    const { url, image } = this._options();
    return (
      <c.BookButton
        onClick={() => {
          return this.props.push(url);
        }}
        image={image}
      />
    );
  }
}

BookButton.propTypes = {
  push: propTypes.func.isRequired,
  buttonOptions: propTypes.shape({
    type: propTypes.oneOf(['writing', 'dialog', 'story']).isRequired,
    data: propTypes.object.isRequired
  }).isRequired
};

export default connect(
  null,
  {
    push
  }
)(BookButton);
