import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { ChoseRole as ChoseRoleComponent } from '../../components';
import { Avatar } from '../../models';
import s from '../../rootSelectors';
import { actions as studyActions } from '../../redux/study';
import { actions as sagaActions } from '../../sagas/actions';

class ChoseRole extends Component {

  render() {
    return (
      <ChoseRoleComponent { ...this.props } />
    );
  }
}

ChoseRole.propTypes = {
  avatars: propTypes.arrayOf(propTypes.instanceOf(Avatar)).isRequired,
  chosenAvatarId: propTypes.number.isRequired,
  setChosenAvatarId: propTypes.func.isRequired,
  startRoleplay: propTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    avatars: s.getCurrentAvatars(state),
    chosenAvatarId: s.study.getChosenAvatarId(state) || 0
  };
};

export default connect(
  mapStateToProps,
  {
    setChosenAvatarId: studyActions.setChosenAvatarId,
    startRoleplay: sagaActions.startRoleplay
  }
)(ChoseRole);
