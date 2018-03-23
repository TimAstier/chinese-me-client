import React, { Component } from 'react';
import { bookComponents as c } from '../../.';
// import { Row } from '../../Shared';
import Img from '../../Shared/Img';

export default class Content extends Component {
  render() {
    return (
      <div>
        <c.P>
          In many characters, it is clear that the phonetic was chosen not just for its sound, but also for its meaning. <c.Chinese>贵</c.Chinese> <b>guì</b> is a good example: its phonetic is the character <c.Chinese>贝</c.Chinese> <b>bèi</b>, which was originally a picture of a <i>cowrie shell</i>.  The oracle bone character faithfully reproduces the shape of the shell and one of the little serrations inside, and these remained even as the character was gradually stylized over the millennia. The traditional character kept these details:
        </c.P>
        <c.Bookrow><Img name="cowrie_1.png" alt="" /></c.Bookrow>
        <c.P>In the simplified version, the serrations have been removed, saving three strokes:</c.P>
        <c.Bookrow><Img name="cowrie_2.png" alt="" /></c.Bookrow>
        <c.P>Cowrie shells were used as currency in ancient society, so this character appears as an element of characters that have something to do with treasure, value, money and trade.</c.P>
      </div>
    );
  }
}
