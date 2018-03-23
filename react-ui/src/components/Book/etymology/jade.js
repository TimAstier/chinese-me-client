import React, { Component } from 'react';
import { bookComponents as c } from '../../.';
import { Row } from '../../Shared';
import Img from '../../Shared/Img';

export default class Content extends Component {
  render() {
    return (
      <div>
        <c.Bookrow>
          <Row>
            <c.Char>玉</c.Char>
            <c.Pinyin>yù</c.Pinyin>
            <c.Meaning>jade</c.Meaning>
          </Row>
        </c.Bookrow>
        <c.P>Today, <i>jade</i> looks like <i>king</i> with a dot. Originally, it was different. Some historians see three pieces of jade on a string; others claim it shows a three-tiered object of worship.</c.P>
        <c.Bookrow>
          <Img name="jade.png" alt="" />
        </c.Bookrow>
      </div>
    );
  }
}
