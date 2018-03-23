import React, { Component } from 'react';
import { bookComponents as c } from '../../.';
// import { Row } from '../../Shared';
import Img from '../../Shared/Img';

export default class Content extends Component {
  render() {
    return (
      <div>
        <c.P>The roots of the characters <c.Chinese>学</c.Chinese> <b>xué</b> and <c.Chinese>觉</c.Chinese> <b>jué</b> are the same. The basic meaning of <c.Chinese>学</c.Chinese> is <i>study</i>. The oracle bone character shows the two hands of the teacher over the roof of the school building: </c.P>
        <c.Bookrow><Img name="study_1.png" alt="" /></c.Bookrow>
        <c.P>On bronze vessels which are about a thousand years younger than the oracle bones, the pupil has become visible inside the school house:</c.P>
        <c.Bookrow><Img name="study_2.png" alt="" /></c.Bookrow>
      </div>
    );
  }
}
