import React, { Component } from 'react';
import { bookComponents as c } from '../../.';
// import { Row } from '../../Shared';
import Img from '../../Shared/Img';

export default class Content extends Component {
  render() {
    return (
      <div>
        <c.P>On the oracle bones, the character for <i>moon</i> was originally a picture of a crescent:</c.P>
        <c.Bookrow><Img name="moon.png" alt="" /></c.Bookrow>
        <c.P>The modern standard character <c.Chinese>月</c.Chinese> <b>yuè</b> still retains this basic shape.</c.P>
      </div>
    );
  }
}
