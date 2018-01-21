import React, { Component } from 'react';
import { bookComponents as c } from '../../.';
// import { Row } from '../../Shared';

export default class Content extends Component {
  render() {
    return (
      <div>
        <c.P>Some strokes can be said to be combinations of more basic ones. An example is the <i>corner</i> stroke, which we find in characters like <c.Chinese>日</c.Chinese>, <c.Chinese>国</c.Chinese> and <c.Chinese>属</c.Chinese>. The corner is written as a horizontal stroke, followed by a pause and change of direction where the pen presses a bit harder against the paper to provide a well-defined angle, and then a vertical stroke.</c.P>
        <c.P>In <c.Chinese>属</c.Chinese> <b>shǔ</b> <i>belong to</i>, there are two corner strokes: one at the top right hand corner; one in the little rectangular element in the middle of the character. The <i>hook</i> stroke at the lower left of the character also contains a similar-looking corner.
        </c.P>
        <c.Bookrow>
          <c.CharacterBox simpChar="属" />
        </c.Bookrow>
      </div>
    );
  }
}
