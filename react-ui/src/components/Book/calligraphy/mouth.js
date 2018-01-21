import React, { Component } from 'react';
import { bookComponents as c } from '../../.';
// import { Row } from '../../Shared';

export default class Content extends Component {
  render() {
    return (
      <div>
        <c.P>This character consists of three strokes; the second stroke is a combination of a <i>horizontal</i> and a <i>vertical</i>：</c.P>
        <c.Bookrow>
          <c.CharacterBox simpChar="口" />
        </c.Bookrow>
      </div>
    );
  }
}
