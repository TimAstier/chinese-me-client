import React, { Component } from 'react';
import { bookComponents as c } from '../../.';
// import { Row } from '../../Shared';
import Img from '../../Shared/Img';

export default class Content extends Component {
  render() {
    return (
      <div>
        <c.P><c.Chinese>小</c.Chinese> is a pictogram. It was originally a picture of three small dots signifying <i>smallness</i>.</c.P>
        <c.Bookrow><Img name="small.png" alt="" /></c.Bookrow>
      </div>
    );
  }
}
