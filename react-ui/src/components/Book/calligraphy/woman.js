import React, { Component } from 'react';
import { bookComponents as c } from '../../.';
// import { Row } from '../../Shared';

export default class Content extends Component {
  render() {
    return (
      <div>
        <c.P>The characters we have learned in this lesson are a good illustration of how different character components are fitted together in complex characters.</c.P>
        <c.P>When <c.Chinese>女</c.Chinese> <i>woman</i> appears on its own as a character, it has lots of room to fill its imagined square:</c.P>
        <c.Bookrow>
          <c.CharacterBox simpChar="女" />
        </c.Bookrow>
        <c.P>The long <i>horizontal</i> stroke is given plenty of space to spread out to the sides in a soft organic curve. But when a character like this appears as an element in a more complex character, it needs to cede some space to the other components:</c.P>
        <c.Bookrow>
          <c.CharacterBox simpChar="好" />
        </c.Bookrow>
        <c.Bookrow>
          <c.CharacterBox simpChar="姓" />
        </c.Bookrow>
        <c.P>The horizontal stroke is shortened to give room for the phonetic, and the right-hand leg is also shorter and a bit more inclined.</c.P>
      </div>
    );
  }
}
