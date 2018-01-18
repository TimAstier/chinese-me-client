import React, { Component } from 'react';
import { bookComponents as c } from '../../.';
// import { Row } from '../../Shared';

export default class Content extends Component {
  render() {
    return (
      <div>
        <c.P>
          The radicals we have seen so far have all been on the left hand side of characters, but in <c.Chinese>您</c.Chinese> <b>nín</b> it is placed at the bottom. The character <c.Chinese>心</c.Chinese> means <i>heart</i> and appears in characters for things like <i>emotions</i>, <i>personality</i> and <i>gratefulness</i> – things that reside in the heart. Respect is one of these heart-felt traits – which is why the heart was added to the respectful form of <c.Chinese>你</c.Chinese> <b>nǐ</b> <i>you</i>.
        </c.P>
      </div>
    );
  }
}
