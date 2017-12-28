import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { bookComponents as c } from '../../../components';
import { push } from 'react-router-redux';
import s from '../../../rootSelectors';
import { actions as sagaActions } from '../../../sagas/actions';

class BookButton extends Component {

  _url = () => {
    switch (this.props.buttonOptions.type) {
      case 'writing':
        return `/study/${this.props.episodeId}/character/${this.props.buttonOptions.data.elementId}/writing`;
      case 'dialog':
        return `/study/${this.props.episodeId}/dialog/${this.props.buttonOptions.data.elementId}/explore`;
      case 'story':
        return `/study/${this.props.episodeId}/character/${this.props.buttonOptions.data.elementId}/etymology`;
      case 'stroke':
        return `/study/${this.props.episodeId}/character/${this.props.buttonOptions.data.elementId}/animation`;
      case 'practice':
        return `/study/${this.props.episodeId}/practice/${this.props.buttonOptions.data.elementId}`;
      case 'exam':
        return `/study/${this.props.episodeId}/exam`;
      default:
        return console.log('Unknown bookButton type');
    }
  }

  render() {
    return (
      <c.BookButton
        onClick={() => {
          if (this.props.buttonOptions.type === 'askUserSettings') {
            return this.props.askUserSettings();
          }
          if (!this.props.buttonOptions.hasOwnProperty('data')) {
            return null;
          }
          return this.props.push(this._url());
        }}
        type={this.props.buttonOptions.type}
      />
    );
  }
}

BookButton.propTypes = {
  push: propTypes.func.isRequired,
  buttonOptions: propTypes.shape({
    type: propTypes.oneOf([
      'writing',
      'dialog',
      'story',
      'stroke',
      'practice',
      'exam',
      'askUserSettings'
    ]).isRequired,
    data: propTypes.object
  }).isRequired,
  episodeId: propTypes.string,
  askUserSettings: propTypes.func.isRequired,
};

const mapStateToProps = state => ({
  episodeId: s.study.getCurrentEpisodeId(state)
});

export default connect(
  mapStateToProps,
  {
    push,
    askUserSettings: sagaActions.askUserSettings
  }
)(BookButton);
