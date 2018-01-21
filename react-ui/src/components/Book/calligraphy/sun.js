import React, { Component } from 'react';
import { bookComponents as c } from '../../.';
// import { Row } from '../../Shared';

export default class Content extends Component {
  render() {
    return (
      <div>
        <c.P>Some strokes can be said to be combinations of more basic ones. An example is the <i>corner</i> stroke, which we find in characters like <c.Chinese>日</c.Chinese>, <c.Chinese>国</c.Chinese> and <c.Chinese>属</c.Chinese>. The corner is written as a horizontal stroke, followed by a pause and change of direction where the pen presses a bit harder against the paper to provide a well-defined angle, and then a vertical stroke.</c.P>
        <c.P>Looking at the printed version of <c.Chinese>日</c.Chinese> <b>rì</b> <i>sun</i>, it is easy to think the corner stroke should be written as a straight angle. But as you can see from the hand-written version, the whole character should be inclined, with the <i>corner</i> and two <i>horizontal</i> strokes slanting slightly upwards.</c.P>
        <c.Bookrow>
          <c.CharacterBox simpChar="日" />
        </c.Bookrow>
        <c.P>Characters with a “frame” need to be written a bit smaller than other characters in order not to look clumsy. In <c.Chinese>国</c.Chinese> <b>guó</b> <i>country</i>, the <i>corner</i> helps define the right size of the whole.</c.P>
        <c.Bookrow>
          <c.CharacterBox simpChar="国" />
        </c.Bookrow>
      </div>
    );
  }
}
