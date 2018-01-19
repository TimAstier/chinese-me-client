import React, { Component } from 'react';
import { bookComponents as c } from '../../.';
// import { Row } from '../../Shared';

export default class Content extends Component {
  render() {
    return (
      <div>
        <c.P>The character <c.Chinese>羊</c.Chinese> <b>yáng</b> <i>sheep</i> appears in many other characters, usually with a positive connotation. One example is <c.Chinese>美</c.Chinese> <b>měi</b> <i>beautiful</i> which seems to depict a man with ram horns on his head, possibly a shaman performing some ceremony:</c.P>
        <c.Bookrow><img src="https://s3.eu-west-2.amazonaws.com/chineseme/images/beautiful.png" alt="" /></c.Bookrow>
        <c.P>Another hypothesis states that the bottom part, which can also mean <i>big</i>, simply refers to the size of the sheep: fat and with plenty of wool.</c.P>
      </div>
    );
  }
}
