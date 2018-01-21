import React, { Component } from 'react';
import { bookComponents as c } from '../../.';
import { Row } from '../../Shared';

export default class Content extends Component {
  render() {
    return (
      <div>
        <c.P>
          The word radical <c.Chinese>讠</c.Chinese> contains only two strokes, but it is not easy to write it well. The main zigzag stroke needs to have a long <i>horizontal</i> onset, a short <i>vertical</i> continuation and a well-defined, sharp <i>hook</i> at the end, with the <i>dot</i> positioned slightly to the right of the main stroke, allowing the radical to snuggle in toward the right hand side of the character. The word radical is very common; by writing it well, you will master many different characters.
        </c.P>
        <c.Bookrow>
          <Row>
            <c.CharacterBox simpChar="语" />
            <c.CharacterBox simpChar="说" />
            <c.CharacterBox simpChar="认" />
            <c.CharacterBox simpChar="识" />
          </Row>
        </c.Bookrow>
      </div>
    );
  }
}
