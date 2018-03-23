import React, { Component } from 'react';
import { bookComponents as c } from '../../.';
// import { Row } from '../../Shared';
import Img from '../../Shared/Img';

export default class Content extends Component {
  render() {
    return (
      <div>
        <c.P><c.Chinese>高</c.Chinese> <b>gāo</b> is an example of a pictogram: the oracle bone characters show a watchtower in a city wall:</c.P>
        <c.Bookrow><Img name="tall.png" alt="" /></c.Bookrow>
        <c.P>These towers, which can still be seen in cities like Xi'an and Pingyao, are impressive buildings – perhaps the tallest of all in ancient cities.</c.P>
      </div>
    );
  }
}
