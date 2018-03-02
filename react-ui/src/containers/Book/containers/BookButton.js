import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { bookComponents as c } from '../../../components';
import { push } from 'react-router-redux';
import s from '../../../rootSelectors';
import { actions as sagaActions } from '../../../sagas/actions';
import { PRODUCTION_ROOT_URL } from '../../../constants/urls';

class BookButton extends Component {
  _url = () => {
    switch (this.props.buttonOptions.type) {
      case 'calligraphy':
        return `/study/${this.props.episodeId}/character/${this.props.buttonOptions.data.elementId}/calligraphy`;
      case 'dialog':
        return `/study/${this.props.episodeId}/dialog/${this.props.buttonOptions.data.elementId}/explore`;
      case 'etymology':
        return `/study/${this.props.episodeId}/character/${this.props.buttonOptions.data.elementId}/etymology`;
      case 'stroke':
        return `/study/${this.props.episodeId}/character/${this.props.buttonOptions.data.elementId}/animation`;
      case 'practice':
        return `/study/${this.props.episodeId}/practice/${this.props.buttonOptions.data.elementId}`;
      case 'review':
        return `/study/${this.props.episodeId}/review`;
      case 'exam':
        return `/study/${this.props.episodeId}/exam`;
      default:
        console.log('Unknown bookButton type');
        return PRODUCTION_ROOT_URL + this.props.currentUrl;
    }
  }

  render() {
    return (
      <c.BookButton
        onClick={() => {
          if (this.props.buttonOptions.clickable === false) {
            return null;
          }
          if (this.props.buttonOptions.type === 'askUserSettings') {
            return this.props.askUserSettings();
          }
          if (!this.props.buttonOptions.hasOwnProperty('data')) {
            return null;
          }
          return this.props.push(this._url());
        }}
        type={this.props.buttonOptions.type}
        url={this._url()}
      />
    );
  }
}

BookButton.propTypes = {
  push: propTypes.func.isRequired,
  buttonOptions: propTypes.shape({
    type: propTypes.oneOf([
      'calligraphy',
      'dialog',
      'etymology',
      'stroke',
      'practice',
      'review',
      'exam',
      'askUserSettings'
    ]).isRequired,
    data: propTypes.object,
    clickable: propTypes.bool
  }).isRequired,
  episodeId: propTypes.string,
  askUserSettings: propTypes.func.isRequired,
  currentUrl: propTypes.string.isRequired
};

const mapStateToProps = state => ({
  episodeId: s.study.getCurrentEpisodeId(state),
  currentUrl: s.routing.getCurrentUrl(state)
});

export default connect(
  mapStateToProps,
  {
    push,
    askUserSettings: sagaActions.askUserSettings
  }
)(BookButton);
