import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { bookComponents as c } from '../../../components';
import { push } from 'react-router-redux';
import dialogIcon from '../../../images/dialogIcon.png';
import brushIcon from '../../../images/brushIcon.png';
import storyIcon from '../../../images/storyIcon.png';
import strokeIcon from '../../../images/strokeIcon.png';
import s from '../../../rootSelectors';

class BookButton extends Component {

  _options = () => {
    switch (this.props.buttonOptions.type) {
      case 'writing':
        return {
          url: `/study/${this.props.episodeId}/character/${this.props.buttonOptions.data.elementId}/writing`,
          image: brushIcon
        };
      case 'dialog':
        return {
          url: `/study/${this.props.episodeId}/dialog/${this.props.buttonOptions.data.elementId}/listen`,
          image: dialogIcon
        };
      case 'story':
        return {
          url: `/study/${this.props.episodeId}/character/${this.props.buttonOptions.data.elementId}/etymology`,
          image: storyIcon
        };
      case 'stroke':
        return {
          url: `/study/${this.props.episodeId}/character/${this.props.buttonOptions.data.elementId}/stroke`,
          image: strokeIcon
        };
      default:
        return console.log('Unknown bookButton type');
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
    type: propTypes.oneOf(['writing', 'dialog', 'story', 'stroke']).isRequired,
    data: propTypes.object.isRequired
  }).isRequired,
  episodeId: propTypes.string.isRequired
};

const mapStateToProps = state => ({
  episodeId: s.study.getCurrentEpisodeId(state)
});

export default connect(
  mapStateToProps,
  {
    push
  }
)(BookButton);
