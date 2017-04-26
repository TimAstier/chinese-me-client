import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Coach, UserFeedback, LessonMenu } from '../../components';
import { get as getLesson, getCharCount, getGrammarCount,
  getComment, setCurrentResource, getNextResource }
  from '../../redux/lesson';

class StudyScreen extends Component {

  componentDidMount() {
    // Initialisation based on routing state
    const resourceId = Number(this.props.children.props.routeParams.id);
    const resourceType = this.props.children.props.route.path.match(/[^/]*/)[0];
    this.props.setCurrentResource({ resourceId, resourceType });
    return this.props.getLesson(this.props.routeParams.lessonId);
  }

  nextResource() {
    // Next Resource based on lesson state and routing state
    const { lessonId, nextResource } = this.props;
    const nextUrl = '/study/' + lessonId + '/' + nextResource.type + '/' + nextResource.id;
    this.context.router.push(nextUrl);
    return this.props.setCurrentResource({
      resourceId: nextResource.id,
      resourceType: nextResource.type
    });
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
          <UserFeedback
            nextResource={this.nextResource.bind(this)}
          />
        </div>

      </div>
    );
  }
}

StudyScreen.propTypes = {
  lessonId: PropTypes.number.isRequired,
  children: PropTypes.node,
  getLesson: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  charCount: PropTypes.number.isRequired,
  grammarCount: PropTypes.number.isRequired,
  comment: PropTypes.string.isRequired,
  routeParams: PropTypes.object.isRequired,
  setCurrentResource: PropTypes.func.isRequired,
  resourceId: PropTypes.number.isRequired,
  resourceType: PropTypes.string.isRequired,
  nextResource: PropTypes.object.isRequired
};

StudyScreen.contextTypes = {
  router: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  const lessonState = state.get('lesson');
  return {
    lessonId: lessonState.get('id'),
    charCount: getCharCount(lessonState),
    grammarCount: getGrammarCount(lessonState),
    title: lessonState.get('title'),
    comment: getComment(lessonState),
    resourceId: lessonState.get('currentResourceId'),
    resourceType: lessonState.get('currentResourceType'),
    nextResource: getNextResource(lessonState)
  };
}

export default connect(mapStateToProps, {
  getLesson,
  setCurrentResource
})(StudyScreen);
