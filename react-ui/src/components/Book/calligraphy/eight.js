import React, { Component } from 'react';
import { bookComponents as c } from '../../.';
// import { Row } from '../../Shared';

export default class Content extends Component {
  render() {
    return (
      <div>
        <c.P>In the character <c.Chinese>八</c.Chinese> <i>eight</i>, the short left hand dot starts firmly at the right and tapers evenly down towards the left. </c.P>
        <c.Bookrow>
          <c.CharacterBox simpChar="八" />
        </c.Bookrow>
        <c.P>If you compare this with the character <c.Chinese>人</c.Chinese> <i>man, person</i>, you see that the dot in <c.Chinese>八</c.Chinese> is actually just a shorter version of the left downward stroke that we have learned previously.</c.P>
      </div>
    );
  }
}
