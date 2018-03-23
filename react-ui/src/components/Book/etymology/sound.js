import React, { Component } from 'react';
import { bookComponents as c } from '../../.';
// import { Row } from '../../Shared';
import Img from '../../Shared/Img';

export default class Content extends Component {
  render() {
    return (
      <div>
        <c.P>The character <c.Chinese>音</c.Chinese> <b>yīn</b> does not appear on any oracle bones; the earliest examples come from Zhōu dynasty bronzes, which are about a thousand years younger. However, scholars have shown that it is probably a variant of the <i>word</i> radical <c.Chinese>讠</c.Chinese>, written <c.Chinese>言</c.Chinese> in traditional characters: the two elements appear interchangeably in some compounds. So what did it originally mean?</c.P>
        <c.Bookrow><Img name="sound.png" alt="" /></c.Bookrow>
        <c.P>The oracle bones show that it was originally a picture of a mouth with a flute. By extension from this original meaning, it became the symbol for <i>sound</i> and finally <i>spoken sound</i>, <i>speech</i>.</c.P>
      </div>
    );
  }
}
