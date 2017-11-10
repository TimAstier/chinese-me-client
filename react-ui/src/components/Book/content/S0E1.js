import React, { Component } from 'react';
import * as c from '../components';
import { content as contentPropTypes } from '../../../helpers/propTypes';

export default class S0E1 extends Component {
  static propTypes = contentPropTypes

  render() {
    const { newCharacters, example, lessonTitle, dialog,
      review, grammarTitle, pageNumber } = this.props;
    return (
      <div>
        <c.Page number={pageNumber()}>
          {lessonTitle()}
        </c.Page>
      </div>
    );
  }
}
