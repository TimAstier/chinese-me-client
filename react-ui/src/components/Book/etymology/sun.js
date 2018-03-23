import React, { Component } from 'react';
import { bookComponents as c } from '../../.';
// import { Row } from '../../Shared';
import Img from '../../Shared/Img';

export default class Content extends Component {
  render() {
    return (
      <div>
        <c.P>The characters for basic natural phenomena are usually derived from straightforward pictures. The character <c.Chinese>日</c.Chinese> <b>rì</b> <i>sun</i> is a good example: it was originally a picture of a round disc, usually with a dot in the middle but sometimes just an empty circle:</c.P>
        <c.Bookrow><Img name="sun.png" alt="" /></c.Bookrow>
        <c.P>The modern character has been stylized to get the straight lines and sharp angles characteristic of the Chinese standard script.</c.P>
      </div>
    );
  }
}
