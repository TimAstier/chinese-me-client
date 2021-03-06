import React, { Component } from 'react';
import { bookComponents as c } from '../../.';
// import { Row } from '../../Shared';
import Img from '../../Shared/Img';

export default class Content extends Component {
  render() {
    return (
      <div>
        <c.P>On the oracle bones, <c.Chinese>见</c.Chinese> was a picture of a huge <i>eye</i> on top of a <i>human</i> – a wonderful illustration of the abstract concept <i>look, see</i>:</c.P>
        <c.Bookrow><Img name="see_1.png" alt="" /></c.Bookrow>
        <c.P>The traditional character kept all the strokes of the oracle bone <i>eye</i>, but they are gone from the simplified character:</c.P>
        <c.Bookrow><Img name="see_2.png" alt="" /></c.Bookrow>
      </div>
    );
  }
}
