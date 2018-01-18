import React, { Component } from 'react';
import { bookComponents as c } from '../../.';
// import { Row } from '../../Shared';

export default class Content extends Component {
  render() {
    return (
      <div>
        <c.P>
          In many characters, the phonetic was obviously not chosen just for its sound, but also for its meaning. <c.Chinese>贵</c.Chinese> <b>guì</b> is a good example: its phonetic is the character <c.Chinese>贝</c.Chinese> <b>bèi</b>, which was originally a picture of a cowrie shell.  The oracle bone character faithfully reproduces the shape of the shell and one of the little serrations inside, even as the character was gradually stylized over the millennia. The traditional character kept the serrations inside the shell:
        </c.P>
        <c.Bookrow><img src="https://s3.eu-west-2.amazonaws.com/chineseme/images/cowrie_1.png" alt="" /></c.Bookrow>
        <c.P>In the simplified version, the serrations have been removed, saving three strokes:</c.P>
        <c.Bookrow><img src="https://s3.eu-west-2.amazonaws.com/chineseme/images/cowrie_2.png" alt="" /></c.Bookrow>
        <c.P>Cowrie shells were used as currency in ancient society, so this character appears as an element of many other characters such as <c.Chinese>贵</c.Chinese> <b>guì</b> that have something to do with treasure, value, money and trade.</c.P>
      </div>
    );
  }
}
