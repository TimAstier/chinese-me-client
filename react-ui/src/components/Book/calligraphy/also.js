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
          <c.Chinese>也</c.Chinese> <b>yě</b> is especially difficult to write well: it starts off as a heavily slanting <i>horizontal</i> stroke, connected by a sharp angle to a vertical <i>hook</i>. Make sure to write the <i>hook</i> with the same heavy slant and marked corner as in the model character.
        </c.P>
        <c.Bookrow>
          <c.CharacterBox simpChar="也" />
        </c.Bookrow>
      </div>
    );
  }
}
