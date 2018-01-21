import React, { Component } from 'react';
import { bookComponents as c } from '../../.';
// import { Row } from '../../Shared';

export default class Content extends Component {
  render() {
    return (
      <div>
        <c.P>This character illustrates another stroke order rule, which says characters should be written from left to right.</c.P>
        <c.P>Even when a character doesn’t have regular sides, it should fit into a roughly square shape; this is why we practice writing in grids of little boxes. In order to fit into their square shape, the two elements in <c.Chinese>叫</c.Chinese> are written closely together so that they snuggle into each other, becoming a single connected unit:</c.P>
        <c.Bookrow>
          <c.CharacterBox simpChar="叫" />
        </c.Bookrow>
      </div>
    );
  }
}
