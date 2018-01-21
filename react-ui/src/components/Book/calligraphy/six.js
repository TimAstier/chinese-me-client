import React, { Component } from 'react';
import { bookComponents as c } from '../../.';
// import { Row } from '../../Shared';

export default class Content extends Component {
  render() {
    return (
      <div>
        <c.Bookrow>
          <c.P>
            The <i>dot</i> is one of the most common and versatile brush strokes. In <c.Chinese>六</c.Chinese> <i>six</i>, all strokes except the <i>horizontal</i> are dots. As you can see, these dots are written differently depending on where they appear in a character.
          </c.P>
          <c.CharacterBox simpChar="六" />
        </c.Bookrow>
        <c.P>- The short top dot starts at the left and finishes with a slight increase of pressure down and left.</c.P>
        <c.P>- The short left bottom dot starts firmly at the right and tapers evenly down towards the left.</c.P>
        <c.P>- The elongated right bottom dot curves softly downward from left to right.</c.P>
      </div>
    );
  }
}
