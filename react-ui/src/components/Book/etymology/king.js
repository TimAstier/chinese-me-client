import React, { Component } from 'react';
import { bookComponents as c } from '../../.';
// import { Row } from '../../Shared';

export default class Content extends Component {
  render() {
    return (
      <div>
        <c.P>So where do Chinese characters come from? We know from archaeological finds that they were originally pictures. During the <b>Shāng</b> dynasty, more than 3,000 years ago, the oracles at the royal court used the shells of turtles and shoulder blades of oxen to tell the future.</c.P>
        <c.Bookrow center><img src="https://s3.eu-west-2.amazonaws.com/chineseme/images/shell.png" alt="" width="560" /></c.Bookrow>
        <c.P>To do this, they placed glowing hot bronze rods against the bone until it cracked from the heat. The soothsayers interpreted these cracks as answers to their questions about the future.</c.P>
        <c.P>To record the questions and answers, they inscribed each bone with a pictorial script which archeologists have shown to be a primitive forms of modern Chinese characters. We call them <i>oracle bone</i> characters.</c.P>
        <c.PartTitle type="secondary">Pictograms</c.PartTitle>
        <c.P>The simplest and most ancient characters are pictures. Some of these are so clear, and so similar to the modern character, that they are still easy to understand – even when they are symbols of abstract concepts. On the oracle bone above, we immediately recognize the symbols for <i>one</i>, <i>two</i> and <i>three</i>.</c.P>
        <c.Bookrow center><img src="https://s3.eu-west-2.amazonaws.com/chineseme/images/yi_er_san.png" alt="" width="560" /></c.Bookrow>
        <c.P>Some symbols are a bit trickier to understand. The character for <i>king</i>, for example, was originally a picture of an ax head. Weapons were the ultimate source of power, so this picture was used to symbolize <i>king</i>.</c.P>
        <c.Bookrow><img src="https://s3.eu-west-2.amazonaws.com/chineseme/images/wang_king2.png" alt=""/></c.Bookrow>
        <c.P><i>King</i> is the most common family name in China. Today, it is written like this:</c.P>
        <c.Bookrow><c.Space width={50}/><c.Char fontSize={70}>王</c.Char></c.Bookrow>
      </div>
    );
  }
}
