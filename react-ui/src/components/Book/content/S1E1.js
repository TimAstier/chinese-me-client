import React, { Component } from 'react';
import * as c from '../components';
import { content as contentPropTypes } from '../../../helpers/propTypes';

export default class S1E1 extends Component {
  static propTypes = contentPropTypes

  render() {
    const { newCharacters, example, lessonTitle, dialog,
      review, grammarTitle, pageNumber, character }
      = this.props;
    return (
      <div>
        <c.Page number={pageNumber()}>
          {newCharacters()}
        </c.Page>
      </div>
    );
  }
}
