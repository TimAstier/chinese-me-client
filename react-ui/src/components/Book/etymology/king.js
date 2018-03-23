import React, { Component } from 'react';
import { bookComponents as c } from '../../.';
import Img from '../../Shared/Img';

export default class Content extends Component {
  render() {
    return (
      <div>
        <c.P>The character for <i>king</i> was originally a picture of an ax head. Weapons were the ultimate source of power, so this picture was used to symbolize <i>king</i>.</c.P>
        <c.Bookrow><Img name="wang_king2.png" alt=""/></c.Bookrow>
        <c.P><i>King</i> is the most common family name in China. Today, it is written like this:</c.P>
        <c.Bookrow><c.Space width={50}/><c.Char fontSize={70}>王</c.Char></c.Bookrow>
      </div>
    );
  }
}
