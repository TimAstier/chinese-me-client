import React, { Component } from 'react';
import { bookComponents as c } from '../../.';
// import { Row } from '../../Shared';

export default class Content extends Component {
  render() {
    return (
      <div>
        <c.P>The character <c.Chinese>为</c.Chinese> is hard to write well. With only four strokes, two of which are tiny <i>dots</i>, each one must  help shape a harmonious whole. Make sure the <i>left slanting stroke</i> is long enough to provide stability, but don’t make it longer than the <i>hook</i> to the right.</c.P>
        <c.Bookrow>
          <c.CharacterBox simpChar="为" />
        </c.Bookrow>
      </div>
    );
  }
}
