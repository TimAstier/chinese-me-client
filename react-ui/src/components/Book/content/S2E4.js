import React, { Component } from 'react';
import * as c from '../components';
import { content as contentPropTypes } from '../../../helpers/propTypes';
// import { Row } from '../../Shared';

export default class Content extends Component {
  static propTypes = contentPropTypes

  render() {
    const { lessonTitle } = this.props;
    return (
      <div>
        <c.Page>
          {lessonTitle()}
          <c.PartTitle type="secondary">This episode is under development.</c.PartTitle>
        </c.Page>
      </div>
    );
  }
}
