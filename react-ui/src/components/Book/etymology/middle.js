import React, { Component } from 'react';
import { bookComponents as c } from '../../.';
import { Row } from '../../Shared';

export default class Content extends Component {
  render() {
    return (
      <div>
        <c.Bookrow>
          <Row>
            <c.Char>中</c.Char>
            <c.Pinyin>zhōng</c.Pinyin>
            <c.Meaning>middle</c.Meaning>
          </Row>
        </c.Bookrow>
        <c.P>This is often explained as an abstract picture: the forceful stroke in the middle symbolizing <i>center, middle</i>. But in fact, the ancient oracle bone character shows a picture of a battle drum with flags fluttering around it.</c.P>
        <c.Bookrow>
          <img src="https://s3.eu-west-2.amazonaws.com/chineseme/images/middle.png" alt="" />
        </c.Bookrow>
        <c.P>It originally meant <i>to gather around the drum</i>, and is still used in words meaning <i>to gather, to rally</i>.</c.P>
      </div>
    );
  }
}
