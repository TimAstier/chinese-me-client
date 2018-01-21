import React, { Component } from 'react';
import { bookComponents as c } from '../../.';
// import { Row } from '../../Shared';

export default class Content extends Component {
  render() {
    return (
      <div>
        <c.P>This is the simplest character in the Chinese language: just a single horizontal stroke. But in all its simplicity, it illustrates important principles of writing. For example, looking at the printed character, the “horizontal” stroke seems absolutely flat:</c.P>
        <c.P><c.Chinese>一</c.Chinese></c.P>
        <c.P>But if you look carefully at the hand-written character, you will see that the horizontal stroke is not just a flat line. It is always written from left to right, with a clearly defined beginning and end and. The whole stroke curves gently, giving it the organic look of a bone or a tree branch:</c.P>
        <c.Bookrow>
          <c.CharacterBox simpChar="一" />
        </c.Bookrow>
      </div>
    );
  }
}
