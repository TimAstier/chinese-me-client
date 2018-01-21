import React, { Component } from 'react';
import { bookComponents as c } from '../../.';
// import { Row } from '../../Shared';

export default class Content extends Component {
  render() {
    return (
      <div>
        <c.P>
          Just like there are many kinds of <i>dot</i>, a <i>hook</i> can come in many shapes, both vertical and horizontal; we already encountered two of vertical versions in the character <c.Chinese>我</c.Chinese>. The <i>hook</i> is often the core stroke that provides grace and balance to a character, gathering in the energy of the other strokes towards the center.
        </c.P>
        <c.P>
          In <c.Chinese>心</c.Chinese> <b>xīn</b>, the horizontal upward <i>hook</i> ties the three <i>dots</i> into an energetic whole. Without the hook, this would just be three lost dots tossed about on the paper.
        </c.P>
        <c.Bookrow>
          <c.CharacterBox simpChar="心" />
        </c.Bookrow>
      </div>
    );
  }
}
