import React, { Component } from 'react';
import { bookComponents as c } from '../../.';
// import { Row } from '../../Shared';

export default class Content extends Component {
  render() {
    return (
      <div>
        <c.P><c.Chinese>本</c.Chinese> <b>běn</b> <i>root</i> is a pictogram of a tree with a horizontal stroke to mark the roots. In fact, the oracle bone character for <i>tree</i> clearly shows roots at the bottom, but these roots as the character was standardized over the centuries. Just as in many Western languages the image of a <i>root</i> conjures up concepts like <i>origin</i>, <i>source</i>, and <i>base</i>.</c.P>
        <c.Bookrow><img src="https://s3.eu-west-2.amazonaws.com/chineseme/images/root.png" alt="" /></c.Bookrow>
        <c.P>The Chinese characters for <i>Japan</i> are <c.Chinese>日本</c.Chinese>, literally ROOT OF THE SUN. This is why Japan is often called <i>Land of the Rising Sun</i> in English.</c.P>
      </div>
    );
  }
}
