import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { QuestionModal as QuestionModalComponent } from '../../components';
import s from '../../rootSelectors';
import { actions as sagaActions } from '../../sagas/actions';

class QuestionModal extends Component {

  render() {
    const onClick = e => {
      return this.props.closedQuestionAnswered(e.target.getAttribute('data'));
    };
    return (
      <QuestionModalComponent
        type="closedQuestion"
        onClick={onClick}
        { ...this.props }
      />
    );
  }
}

QuestionModal.propTypes = {
  open: propTypes.bool.isRequired,
  closedQuestionAnswered: propTypes.func.isRequired,
  screenType: propTypes.string.isRequired
};

const mapStateToProps = state => ({
  open: s.ui.getOpenQuestionModal(state),
  screenType: s.routing.getCurrentScreenType(state)
});

export default connect(
  mapStateToProps,
  {
    closedQuestionAnswered: sagaActions.closedQuestionAnswered
  }
)(QuestionModal);
