import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Coach, UserFeedback, LessonMenu } from '../../components';
import { get as getLesson, charCount, grammarCount, getComment }
  from '../../redux/lesson';

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
          <Coach comment={this.props.comment} />
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
  comment: PropTypes.string.isRequired,
  routeParams: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  const resourceId = Number(ownProps.children.props.routeParams.id);
  const resourceType = ownProps.children.props.route.path.match(/[^/]*/);
  return {
    charCount: charCount(state.get('lesson')),
    grammarCount: grammarCount(state.get('lesson')),
    title: state.get('lesson').get('title'),
    comment: getComment(state.get('lesson'), resourceId, resourceType)
  };
}

export default connect(mapStateToProps, { getLesson })(StudyScreen);
