import React, { Component } from 'react';
import { bookComponents as c } from '../../.';
import { Row } from '../../Shared';

export default class Content extends Component {
  render() {
    return (
      <div>
        <c.P>Characters with few strokes are often the hardest to write well. One example is <c.Chinese>文</c.Chinese> <b>wén</b>. The printed character looks more or less symmetrical, but the handwritten version seems to be caught in the midst of movement, stable yet with a clear sense of energy and direction. The strokes are separate but bound by invisible muscles; there is a sense of continuity between the <i>dot</i> and the <i>left downward</i> stroke on either side of the softly slanting <i>horizontal</i> stroke.</c.P>
        <c.Bookrow>
          <Row>
            <c.CharacterBox simpChar="文" />
          </Row>
        </c.Bookrow>
      </div>
    );
  }
}
