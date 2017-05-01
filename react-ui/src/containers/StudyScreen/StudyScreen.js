import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Coach, UserFeedback, LessonMenu, ResourceLoader, LessonCompleted}
  from '../../components';
import { Char, Dialog, Grammar, Word } from '../.';
import { fetchLesson, getTitle } from '../../redux/lesson';
import { completeResource, selectors as resourcesSelectors }
  from '../../redux/resources';
import { setStudy, fetchStudyUrl, selectors as studySelectors }
  from '../../redux/study';
import { getCurrentUserId } from '../../redux/auth';

class StudyScreen extends Component {

  componentDidMount() {
    // get Study URL from server
    // As this Route requires Auth, this.props.currentUserId is available
    fetchStudyUrl(this.props.currentUserId)
      .then(studyUrl => {
        this.props.setStudy(studyUrl.data);
        return this.props.fetchLesson(studyUrl.data.split('/')[1]);
      });
  }

  // TODO: move to ducks file or operation file (using that?)
  nextResource() {
    const { nextResource } = this.props;
    const { lessonId, resourceType, resourceId } = this.props;
    // Mark current resource as completed
    const nextUrl = 'study/' + lessonId + '/' + nextResource.type + '/' + nextResource.id;
    // console.log(nextUrl)
    const data = { resourceType, resourceId, lessonId, nextUrl };
    this.props.completeResource(data);
  }

  renderMainContent(resourceType) {
    switch (resourceType) {
      case 'char': return <Char/>;
      case 'dialog': return <Dialog/>;
      case 'grammar': return <Grammar/>;
      case 'word': return <Word/>;
      case 'end': return <LessonCompleted/>;
      default: return <ResourceLoader/>;
    }
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
            wordCount={this.props.wordCount}
            completedWordCount={this.props.completedWordCount}
            activeType={this.props.resourceType}
          />
          {this.props.comment &&
            <Coach comment={this.props.comment} />
          }
        </div>

        <div id="main-content">
          {this.renderMainContent(this.props.resourceType)}
        </div>

        <div id="right-sidebar">
          <UserFeedback nextResource={this.nextResource.bind(this)} />
        </div>

      </div>
    );
  }
}

StudyScreen.propTypes = {
  children: PropTypes.node,
  fetchLesson: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  charCount: PropTypes.number.isRequired,
  completedCharCount: PropTypes.number.isRequired,
  grammarCount: PropTypes.number.isRequired,
  completedGrammarCount: PropTypes.number.isRequired,
  dialogCount: PropTypes.number.isRequired,
  completedDialogCount: PropTypes.number.isRequired,
  wordCount: PropTypes.number.isRequired,
  completedWordCount: PropTypes.number.isRequired,
  comment: PropTypes.string.isRequired,
  nextResource: PropTypes.object.isRequired,
  completeResource: PropTypes.func.isRequired,
  setStudy: PropTypes.func.isRequired,
  lessonId: PropTypes.string.isRequired,
  resourceId: PropTypes.string.isRequired,
  resourceType: PropTypes.string.isRequired,
  currentUserId: PropTypes.number.isRequired
};

StudyScreen.contextTypes = {
  router: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    title: getTitle(state),
    charCount: resourcesSelectors.getCharCount(state),
    completedCharCount: resourcesSelectors.getCompletedCharCount(state),
    grammarCount: resourcesSelectors.getGrammarCount(state),
    completedGrammarCount: resourcesSelectors.getCompletedGrammarCount(state),
    dialogCount: resourcesSelectors.getDialogCount(state),
    completedDialogCount: resourcesSelectors.getCompletedDialogCount(state),
    wordCount: resourcesSelectors.getWordCount(state),
    completedWordCount: resourcesSelectors.getCompletedWordCount(state),
    comment: resourcesSelectors.getComment(state),
    nextResource: resourcesSelectors.getNextResource(state),
    lessonId: studySelectors.getLessonId(state),
    resourceType: studySelectors.getResourceType(state),
    resourceId: studySelectors.getResourceId(state),
    currentUserId: getCurrentUserId(state)
  };
}

export default connect(mapStateToProps, {
  fetchLesson,
  setStudy,
  completeResource
})(StudyScreen);
