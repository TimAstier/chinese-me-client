import React, { Component } from 'react';
import { bookComponents as c } from '../../.';
// import { Row } from '../../Shared';
import Img from '../../Shared/Img';

export default class Content extends Component {
  render() {
    return (
      <div>
        <c.P>Finally, let us practice a really beautiful character which is a bit more complex. The stroke order follows the general rules <i>top to bottom</i> and <i>left to right</i>, but as you can see, the dot on the upper right hand side is written last.</c.P>
        <c.P>
          This character is dominated by a long, sweeping stroke which is called a <i>hook</i>. <i>Hooks</i> are exactly what the name implies: strokes which end in a sharp angle. The character <c.Chinese>我</c.Chinese> contains two examples: a vertical <i>hook</i> on the left, and the long <i>hook</i> on the right hand side, which needs to be given ample space to stretch out. The barb at the end of a <i>hook</i> gathers in the energy of the stroke and prevents it from flowing out of the character:
        </c.P>
        <c.Bookrow>
          <c.CharacterBox simpChar="我" />
        </c.Bookrow>
        <c.P>If the dominating <i>hook</i> is too short, the whole character looks lopsided:</c.P>
        <c.Bookrow><Img name="lopsided_wo.png" alt="" /></c.Bookrow>
        <c.P>Since <c.Chinese>我</c.Chinese> is one of the most common characters in the Chinese language, writing it quickly will save you lots of time. If you practice writing it elegantly, you will develop a rhythm which will eventually make you faster. Look at the calligraphy video and try to mimic not just each stroke, but the flow of writing.</c.P>
      </div>
    );
  }
}
