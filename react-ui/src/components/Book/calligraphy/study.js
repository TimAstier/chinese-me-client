import React, { Component } from 'react';
import { bookComponents as c } from '../../.';
import { Row } from '../../Shared';

export default class Content extends Component {
  render() {
    return (
      <div>
        <c.P>
          Even in the printed characters, we see that the three <i>dots</i> on 学 and 觉 are not all the same. The two first <i>dots</i> are written downwards to the right, placed along a slanting plane above the long <i>hook</i> stroke signifying the roof in each character; the third <i>dot</i> is more marked, starting with a clear run-up and then slanting downwards to the left. This is a fine illustration of how the strokes have been chosen for ease and speed of writing: if you follow the pen as it traces the three dots, you can see that each stroke starts and ends at just the right place to provide a natural transition to the following stroke:
        </c.P>
        <c.Bookrow>
          <Row>
            <c.CharacterBox simpChar="学" />
            <c.CharacterBox simpChar="觉" />
          </Row>
        </c.Bookrow>
      </div>
    );
  }
}
