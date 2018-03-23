import React, { Component } from 'react';
import { bookComponents as c } from '../../.';
// import { Row } from '../../Shared';
import Img from '../../Shared/Img';

export default class Content extends Component {
  render() {
    return (
      <div>
        <c.P>
          The character <c.Chinese>走</c.Chinese> originally meant <i>a person walking</i>. The four strokes at the bottom of <c.Chinese>走</c.Chinese> mean <i>foot</i>. This <i>foot</i> element often appears in characters that denote <i>movement</i>. The upper part of <c.Chinese>走</c.Chinese> is <c.Chinese>士</c.Chinese>, which usually means <i>gentleman</i>, <i>aristocrat</i>, but which is also often used as a synonym for <c.Chinese>人</c.Chinese> <i>man</i>, <i>person</i>.
        </c.P>
        <c.Bookrow><Img name="walk.png" alt="" /></c.Bookrow>
        <c.P>The <i>foot</i> element also appears at the bottom of the character <c.Chinese>是</c.Chinese>, but its role here is more difficult to interpret. In ancient texts, <c.Chinese>是</c.Chinese> often means <i>correct</i>, <i>as things should be</i>. Since its upper element is <c.Chinese>日</c.Chinese> <i>sun</i>, some scholars have speculated that it might originally have meant <i>as the sun goes</i>.</c.P>
        <c.Bookrow><Img name="be.png" alt="" /></c.Bookrow>
      </div>
    );
  }
}
