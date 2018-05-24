import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { bookComponents as c } from '../../../components';
import { push } from 'react-router-redux';
import s from '../../../rootSelectors';
import { actions as sagaActions } from '../../../sagas/actions';
import swal from 'sweetalert';

class BookButton extends Component {
  _redirectUser = () => {
    return swal({
      title: 'Account required',
      text: 'You need to log in to access the "Me" part of the experience.\n\nIf you don\'t want to create an account now, no worry! You can continue reading the course and register later if you want to.',
      icon: 'info',
      buttons: ['Continue reading', 'Register for free']
    }).then(register => {
      if (register) {
        return this.props.push('/signup');
      }
      return null;
    });
  }

  _url = () => {
    // bookButtons in "Help" page do not necessary have all options
    if (['review', 'exam', 'askUserSettings'].indexOf(this.props.buttonOptions.type) === -1) {
      // Those buttons require additional data (elementId)
      if (!this.props.buttonOptions.data || !this.props.buttonOptions.data.elementId) {
        return this.props.currentUrl;
      }
      switch (this.props.buttonOptions.type) {
        case 'calligraphy':
          return `/course/${this.props.episodeId}/character/${this.props.buttonOptions.data.elementId}/calligraphy`;
        case 'dialog':
          return `/course/${this.props.episodeId}/dialog/${this.props.buttonOptions.data.elementId}/explore`;
        case 'etymology':
          return `/course/${this.props.episodeId}/character/${this.props.buttonOptions.data.elementId}/etymology`;
        case 'stroke':
          return `/course/${this.props.episodeId}/character/${this.props.buttonOptions.data.elementId}/animation`;
        case 'practice':
          return `/course/${this.props.episodeId}/practice/${this.props.buttonOptions.data.elementId}`;
        default:
          return this.props.currentUrl;
      }
    } else {
      switch (this.props.buttonOptions.type) {
        case 'review':
          return `/course/${this.props.episodeId}/review`;
        case 'exam':
          return `/course/${this.props.episodeId}/exam`;
        case 'askUserSettings':
          return `/course/${this.props.episodeId}/question`;
        default:
          return this.props.currentUrl;
      }
    }
  }

  render() {
    return (
      <c.BookButton
        onClick={() => {
          this.props.clickedBookButton({
            type: this.props.buttonOptions.type
          });
          if (this.props.buttonOptions.clickable === false) {
            return null;
          }
          if (!this.props.isAuthenticated && this.props.buttonOptions.type === 'askUserSettings') {
            return this._redirectUser();
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
  currentUrl: propTypes.string.isRequired,
  clickedBookButton: propTypes.func.isRequired,
  isAuthenticated: propTypes.bool.isRequired
};

const mapStateToProps = state => ({
  episodeId: s.study.getCurrentEpisodeId(state),
  currentUrl: s.routing.getCurrentUrl(state),
  isAuthenticated: s.auth.getIsAuthenticated(state)
});

export default connect(
  mapStateToProps,
  {
    push,
    askUserSettings: sagaActions.askUserSettings,
    clickedBookButton: sagaActions.clickedBookButton
  }
)(BookButton);
