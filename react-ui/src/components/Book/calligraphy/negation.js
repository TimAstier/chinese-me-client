import React, { Component } from 'react';
import { bookComponents as c } from '../../.';
// import { Row } from '../../Shared';

export default class Content extends Component {
  render() {
    return (
      <div>
        <c.P>In a previous lesson, we looked at <c.Chinese>文</c.Chinese> as an example of a character that looks almost symmetrical in print but must be given life and movement to look good in its handwritten form. <c.Chinese>不</c.Chinese> is another clear example of the difference between printed and handwritten characters.</c.P>
        <c.P>In the printed character <c.Chinese>不</c.Chinese>, the top <i>horizontal</i> stroke is straight and level, and the <i>downward slanting</i> stroke begins in exactly the same place as the <i>vertical</i> stroke. In the hand-written character, the <i>horizontal</i> stroke curves organically as it strives upwards towards the right, and the <i>downward slanting</i> stroke starts slightly to the right of center in order to provide balance to the character.</c.P>
        <c.Bookrow>
          <c.CharacterBox simpChar="不" />
        </c.Bookrow>
      </div>
    );
  }
}
