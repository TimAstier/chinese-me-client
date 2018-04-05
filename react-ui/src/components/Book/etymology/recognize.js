import React, { Component } from 'react';
import { bookComponents as c } from '../../.';
// import { Row } from '../../Shared';
import Img from '../../Shared/Img';

export default class Content extends Component {
  render() {
    return (
      <div>
        <c.P>The characters <c.Chinese>认</c.Chinese> <b>rèn</b> and <c.Chinese>识</c.Chinese> <b>shí</b> are a good example of the difference between simplified and traditional Chinese characters. The traditional versions are incredibly complex, containing 14 and 19 strokes, respectively. Both contain the speech radical, which was simplified from seven strokes to two:</c.P>
        <c.Bookrow><Img name="recognize_1.png" alt="" /></c.Bookrow>
        <c.P>In addition, the phonetic of each character was replaced with a simpler one, containing two and five strokes, respectively:</c.P>
        <c.Bookrow><Img name="recognize_2.png" alt="" /></c.Bookrow>
        <c.Bookrow><Img name="recognize_3.png" alt="" /></c.Bookrow>
        <c.P>This gives a grand total of four strokes for the simplified version of <c.Chinese>认</c.Chinese> and seven strokes for <c.Chinese>识</c.Chinese>.</c.P>
      </div>
    );
  }
}
