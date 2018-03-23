import React, { Component } from 'react';
import { bookComponents as c } from '../../.';
// import { Row } from '../../Shared';
import Img from '../../Shared/Img';

export default class Content extends Component {
  render() {
    return (
      <div>
        <c.P>The character <c.Chinese>羊</c.Chinese> <b>yáng</b> <i>sheep</i> was originally a picture of a sheep’s head – horns, ears and snout:</c.P>
        <c.Bookrow><Img name="sheep.png" alt="" /></c.Bookrow>
      </div>
    );
  }
}
