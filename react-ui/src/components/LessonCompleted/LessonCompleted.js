import React, { Component } from 'react';
import { Message } from 'semantic-ui-react';

class LessonCompleted extends Component {

  render() {
    return (
      <div id="lesson-completed" className="center">
        <Message success>
          <Message.Header>Congratulations, you completed this lesson!</Message.Header>
        </Message>
      </div>
    );
  }
}

LessonCompleted.propTypes = {};

export default LessonCompleted;
