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

class StaticEpisode extends Component {

  componentWillMount() {
    return this.props.initLesson(this.props.params.id);
  }

  componentDidUpdate(prevProps) {
    if (this.props.params.id !== prevProps.params.id) {
      return this.props.initLesson(this.props.params.id);
    }
    return null;
  }

  render() {
    const episodeId = this.props.params.id;
    return (
      <Wrapper>
        <FeedbackModal />
        <MapModal />
        <Navbar />
        <LessonComponent
          initialized={this.props.initialized}
          content={content['Lesson' + episodeId]}
          examples={this.props.examples}
          lesson={this.props.lesson}
        />
      </Wrapper>
    );
  }
}

StaticEpisode.propTypes = {
  params: propTypes.object.isRequired,
  initialized: propTypes.bool.isRequired,
  initLesson: propTypes.func.isRequired,
  examples: propTypes.arrayOf(propTypes.instanceOf(models.Example)).isRequired,
  lesson: propTypes.instanceOf(models.Lesson)
};

const mapStateToProps = state => ({
  initialized: selectors.getLessonInitiliazed(state),
  examples: selectors.getCurrentExamples(state),
  lesson: selectors.getCurrentLesson(state)
});

export default connect(
  mapStateToProps,
  {
    initLesson: sagaActions.initLesson
  }
)(StaticEpisode);
