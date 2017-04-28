import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Coach, UserFeedback, LessonMenu } from '../../components';
import { actions, getCharCount, getGrammarCount, getDialogCount, getComment,
  getNextResource, getLessonId, getTitle, getCurrentResourceId,
  getCurrentResourceType, getCompletedCharCount, getCompletedGrammarCount,
  getCompletedDialogCount } from '../../redux/lesson';

// TODO: import all selectors

class StudyScreen extends Component {

  componentDidMount() {
    // Initialisation based on routing state
    const resourceId = Number(this.props.children.props.routeParams.id);
    const resourceType = this.props.children.props.route.path.match(/[^/]*/)[0];
    this.props.setCurrentResource({ resourceId, resourceType });
    return this.props.getLesson(this.props.routeParams.lessonId);
  }

  // TODO: move to ducks file or operation file (using that?)
  nextResource() {
    const { lessonId, nextResource, resourceId,
      resourceType } = this.props;
    // Mark current resource as completed
    const data = { resourceType, resourceId, lessonId };
    this.props.completeResource(data)
      .then(() => {
        // Calculate nextResource URL based on lesson state and routing state
        const nextUrl = '/study/' + lessonId + '/' + nextResource.type + '/' + nextResource.id;
        // Display nextResource and fetch resource data
        this.context.router.push(nextUrl);
        // Set currentResource to update study screen (coach, menu, etc.)
        return this.props.setCurrentResource({
          resourceId: nextResource.id,
          resourceType: nextResource.type
        });
      })
      .catch((err) => {
        console.log('error: ' + err); // eslint-disable-line no-console
      });
  }

  render() {
    return (
      <div id="study-screen">

        <div id="left-sidebar">
          <LessonMenu
            title={this.props.title}
            charCount={this.props.charCount}
            completedCharCount={this.props.completedCharCount}
            grammarCount={this.props.grammarCount}
            completedGrammarCount={this.props.completedGrammarCount}
            dialogCount={this.props.dialogCount}
            completedDialogCount={this.props.completedDialogCount}
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
  completedCharCount: PropTypes.number.isRequired,
  grammarCount: PropTypes.number.isRequired,
  completedGrammarCount: PropTypes.number.isRequired,
  dialogCount: PropTypes.number.isRequired,
  completedDialogCount: PropTypes.number.isRequired,
  comment: PropTypes.string.isRequired,
  routeParams: PropTypes.object.isRequired,
  setCurrentResource: PropTypes.func.isRequired,
  resourceId: PropTypes.number.isRequired,
  resourceType: PropTypes.string.isRequired,
  nextResource: PropTypes.object.isRequired,
  completeResource: PropTypes.func.isRequired
};

StudyScreen.contextTypes = {
  router: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    lessonId: getLessonId(state),
    charCount: getCharCount(state),
    completedCharCount: getCompletedCharCount(state),
    grammarCount: getGrammarCount(state),
    completedGrammarCount: getCompletedGrammarCount(state),
    dialogCount: getDialogCount(state),
    completedDialogCount: getCompletedDialogCount(state),
    title: getTitle(state),
    comment: getComment(state),
    resourceId: getCurrentResourceId(state),
    resourceType: getCurrentResourceType(state),
    nextResource: getNextResource(state)
  };
}

export default connect(mapStateToProps, { ...actions })(StudyScreen);
