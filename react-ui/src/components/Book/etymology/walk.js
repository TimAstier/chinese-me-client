import React, { Component } from 'react';
import { bookComponents as c } from '../../.';
// import { Row } from '../../Shared';

export default class Content extends Component {
  render() {
    return (
      <div>
        <c.P>
          The four strokes at the bottom of <c.Chinese>走</c.Chinese> <i>walk</i> mean <i>foot</i>; they appear in characters that denote <i>movement</i>. The top of <c.Chinese>走</c.Chinese> is <c.Chinese>士</c.Chinese> which means <i>gentleman</i>, <i>aristocrat</i> but is also a synonym for <c.Chinese>人</c.Chinese> <i>man</i>, <i>person</i>, so
          the entire character originally meant <i>a person walking</i>.
        </c.P>
        <c.Bookrow><img src="https://s3.eu-west-2.amazonaws.com/chineseme/images/walk.png" alt="" /></c.Bookrow>
      </div>
    );
  }
}
