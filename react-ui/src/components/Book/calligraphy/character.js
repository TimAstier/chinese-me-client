import React, { Component } from 'react';
import { bookComponents as c } from '../../.';
// import { Row } from '../../Shared';

export default class Content extends Component {
  render() {
    return (
      <div>
        <c.P>The <i>roof</i> radical appears in many characters. It is a good illustration of how different parts of characters influence each other even when they do not need to cede space directly.</c.P>
        <c.P>
          If we compare the <i>roof</i> radical in <c.Chinese>字</c.Chinese> and <c.Chinese>客</c.Chinese>, we can see that they vary in breadth: the <i>roof</i> on <c.Chinese>字</c.Chinese> spreads out horizontally, while the <i>roof</i> on <c.Chinese>客</c.Chinese> is shorter. This is due to the difference in the lower part of each character. The bottom part of <c.Chinese>字</c.Chinese> is narrow with few strokes; it needs a big <i>roof</i> to balance the whole. The bottom of <c.Chinese>客</c.Chinese> is more dense, with a long sweeping <i>right downward</i> stroke, so the <i>roof</i> is reduced to dainty decoration on top of the character’s sturdy foundation.
        </c.P>
        <c.Bookrow>
          <c.CharacterBox simpChar="字" />
        </c.Bookrow>
      </div>
    );
  }
}
