import React, { Component } from 'react';
import { bookComponents as c } from '../../.';
// import { Row } from '../../Shared';

export default class Content extends Component {
  render() {
    return (
      <div>
        <c.P>
          You may have noticed that the bottom four strokes of <c.Chinese>走</c.Chinese> also appear in <c.Chinese>是</c.Chinese>. The top of <c.Chinese>是</c.Chinese> means <i>sun</i> or <i>sundial</i>, but no-one has presented a convincing interpretation of this combination of elements: in ancient texts, <c.Chinese>是</c.Chinese> often means <i>correct</i>, <i>as things should be</i>, so some scholars have speculated that it might originally have meant “as the sun goes”.
        </c.P>
        <c.Bookrow><img src="https://s3.eu-west-2.amazonaws.com/chineseme/images/be.png" alt="" /></c.Bookrow>
      </div>
    );
  }
}
