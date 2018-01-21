import React, { Component } from 'react';
import { bookComponents as c } from '../../.';
import { Row } from '../../Shared';

export default class Content extends Component {
  render() {
    return (
      <div>
        <c.P>The characters <c.Chinese>他</c.Chinese> <b>tā</b> and <c.Chinese>她</c.Chinese> <b>tā</b> both contain the character <c.Chinese>也</c.Chinese> <b>yě</b> on their right. Note how the long hook in <c.Chinese>也</c.Chinese> becomes even more sharply inclined when it has to cede some extra space to the thicker radical <c.Chinese>女</c.Chinese>.</c.P>
        <c.Bookrow>
          <Row>
            <c.CharacterBox simpChar="也" />
            <c.CharacterBox simpChar="他" />
            <c.CharacterBox simpChar="她" />
          </Row>
        </c.Bookrow>
      </div>
    );
  }
}
