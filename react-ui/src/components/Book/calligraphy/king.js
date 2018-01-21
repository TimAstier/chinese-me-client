import React, { Component } from 'react';
import { bookComponents as c } from '../../.';
// import { Row } from '../../Shared';

export default class Content extends Component {
  render() {
    return (
      <div>
        <c.P>This character is made up of three horizontal strokes which are connected by another stroke: <i>vertical</i>. Unlike the <i>horizontal</i> stroke, the <i>vertical</i> stroke should be absolutely straight. But it still has a clear beginning and end:</c.P>
        <c.Bookrow>
          <c.CharacterBox simpChar="丨"/>
        </c.Bookrow>
        <c.P>But it is not enough to write each individual stroke correctly. The strokes must always be written in the same <i>order</i>.</c.P>
        <c.P>Chinese people are taught this standard order for each character in school, and they always use it. The pen flows through the character in the same way every time, and this makes the characters easier to memorize, easier to recognize, and ultimately much faster to write. Stroke order is also the basis for one of the methods used to look up characters in dictionaries.</c.P>
        <c.P>Fortunately, most students find stroke order easy to remember. We need to memorize each character individually, but there are some general guidelines that make this easier: for example, characters are written <i>top</i> to <i>bottom</i>. The stroke order of <b>wáng</b> is an illustration of this rule.</c.P>
        <c.P>Now, practice writing it yourself, as beautifully as you can：</c.P>
        <c.Bookrow>
          <c.CharacterBox simpChar="王" />
        </c.Bookrow>
      </div>
    );
  }
}
