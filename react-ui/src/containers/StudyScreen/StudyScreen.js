import React, { Component } from 'react';
import { Coach, UserFeedback, LessonMenu } from '../../components';

// TODO: Import this from the DB
const comment = 'Here is another usage of the character 有 yǒu, previously seen in lesson 2.';

class StudyScreen extends Component {

  render() {
    // Allow to pass props along with children coming from react-router
    // See following link for case with multiple children
    // http://stackoverflow.com/questions/32370994/how-to-pass-props-to-this-props-children

    // const childrenWithProps = React.cloneElement(this.props.children, { ...grammarProps });
    const childrenWithProps = React.cloneElement(this.props.children, {});

    return (
      <div id="study-screen">

        <div id="left-sidebar">
          <LessonMenu />
          <Coach comment={comment}/>
        </div>

        <div id="main-content">
          {childrenWithProps}
        </div>

        <div id="right-sidebar">
          <UserFeedback />
        </div>

      </div>
    );
  }
}

StudyScreen.propTypes = {
  children: React.PropTypes.node
};

export default StudyScreen;
