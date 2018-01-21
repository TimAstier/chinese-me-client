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
          <c.Chinese>你</c.Chinese> <b>nǐ</b> <i>you</i> (embeded in <c.Chinese>您</c.Chinese>) features an example of a horizontal <i>hook</i> which appears in many other characters. While it is perhaps not the core stroke of this character, it still serves to retain the energy and bring the pen sweeping back to the middle, as preparation for the following <i>vertical</i> stroke.
        </c.P>
        <c.Bookrow>
          <c.CharacterBox simpChar="你" />
        </c.Bookrow>
        <c.Bookrow>
          <c.CharacterBox simpChar="您" />
        </c.Bookrow>
      </div>
    );
  }
}
