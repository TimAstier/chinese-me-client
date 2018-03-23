import React, { Component } from 'react';
import { bookComponents as c } from '../../.';
// import { Row } from '../../Shared';
import Img from '../../Shared/Img';

export default class Content extends Component {
  render() {
    return (
      <div>
        <c.P>The oracle bone character for <c.Chinese>比</c.Chinese> <b>bǐ</b> <i>compare</i> shows two men side by side for comparison – or perhaps offering something to the king to be compared?</c.P>
        <c.Bookrow><Img name="compare.png" alt="" /></c.Bookrow>
      </div>
    );
  }
}
