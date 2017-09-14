import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { Lesson as LessonComponent } from '../../components';
import * as content from '../../components/Lesson/content';
import { FeedbackModal, Navbar, MapModal } from '../.';
import styled from 'styled-components';
import selectors from '../../rootSelectors';
import { actions as sagaActions } from '../../sagas/actions';
import * as models from '../../models';

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  background-color: #fefefe;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

class Lesson extends Component {

  componentWillMount() {
    const { seasonNumber, lessonNumber } = this.props.params;
    return this.props.initLesson(seasonNumber, lessonNumber);
  }

  componentDidUpdate(prevProps) {
    const { seasonNumber, lessonNumber } = this.props.params;
    if (this.props.location.pathname !== prevProps.location.pathname) {
      return this.props.initLesson(seasonNumber, lessonNumber);
    }
    return null;
  }

  render() {
    const { seasonNumber, lessonNumber } = this.props.params;
    return (
      <Wrapper>
        <FeedbackModal />
        <MapModal />
        <Navbar />
        <LessonComponent
          initialized={this.props.initialized}
          content={content[`S${seasonNumber}E${lessonNumber}`]}
          lesson={this.props.lesson}
        />
      </Wrapper>
    );
  }
}

Lesson.propTypes = {
  params: propTypes.object.isRequired,
  initialized: propTypes.bool.isRequired,
  initLesson: propTypes.func.isRequired,
  lesson: propTypes.instanceOf(models.Lesson),
  location: propTypes.object.isRequired
};

const mapStateToProps = state => ({
  initialized: selectors.getLessonInitiliazed(state),
  lesson: selectors.getCurrentLesson(state)
});

export default connect(
  mapStateToProps,
  {
    initLesson: sagaActions.initLesson
  }
)(Lesson);
