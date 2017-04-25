import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Coach, UserFeedback, LessonMenu } from '../../components';
import { get as getLesson, charCount, grammarCount, getTitle }
  from '../../redux/lessons';

// TODO: Import this from the DB
const comment = 'Here is another usage of the character 有 yǒu, previously seen in lesson 2.';

class StudyScreen extends Component {

  componentWillMount() {
    return this.props.getLesson(this.props.routeParams.lessonId);
  }

  render() {
    return (
      <div id="study-screen">

        <div id="left-sidebar">
          <LessonMenu
            title={this.props.title}
            charCount={this.props.charCount}
            grammarCount={this.props.grammarCount}
          />
          <Coach comment={comment}/>
        </div>

        <div id="main-content">
          {this.props.children}
        </div>

        <div id="right-sidebar">
          <UserFeedback />
        </div>

      </div>
    );
  }
}

StudyScreen.propTypes = {
  children: PropTypes.node,
  getLesson: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  charCount: PropTypes.number.isRequired,
  grammarCount: PropTypes.number.isRequired,
  routeParams: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    charCount: charCount(state.get('lessons')),
    grammarCount: grammarCount(state.get('lessons')),
    title: getTitle(state.get('lessons'))
  };
}

export default connect(mapStateToProps, { getLesson })(StudyScreen);
