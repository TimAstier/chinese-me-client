import React, { Component } from 'react';
import { bookComponents as c } from '../../.';
// import { Row } from '../../Shared';

export default class Content extends Component {
  render() {
    return (
      <div>
        <c.P>The character <c.Chinese>找</c.Chinese> is composed of two elements: the very common <i>hand</i> radical on the left, and a character meaning <i>battle axe</i>. The <i>hand</i> radical contains an example of the <i>upward slanting</i> stroke, which is written using a small run-up going right and down, followed by a tapering stroke slanting upwards:</c.P>
        <c.Bookrow>
          <c.CharacterBox simpChar="找" />
        </c.Bookrow>
        <c.P>This character can be confusingly similar to <c.Chinese>我</c.Chinese> <b>wǒ</b>, but the <i>hand</i> radical in <c.Chinese>找</c.Chinese> <b>zhǎo</b> doesn’t have any dot at the top, and the long slanting <i>horizontal</i> stroke in <c.Chinese>我</c.Chinese> is matched by two separate strokes in <c.Chinese>找</c.Chinese>.</c.P>
        <c.Bookrow>
          <c.CharacterBox simpChar="找" />
        </c.Bookrow>
        <c.Bookrow>
          <c.CharacterBox simpChar="我" />
        </c.Bookrow>
      </div>
    );
  }
}
