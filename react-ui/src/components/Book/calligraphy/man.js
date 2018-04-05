import React, { Component } from 'react';
import { bookComponents as c } from '../../.';
// import { Row } from '../../Shared';
import Img from '../../Shared/Img';

export default class Content extends Component {
  render() {
    return (
      <div>
        <c.P>We have so far learned the <i>horizontal</i>, <i>vertical</i> and <i>hook</i> strokes. The character <c.Chinese>人</c.Chinese> <i>person</i> contains two new strokes: the <i>left</i> and <i>right downward</i> strokes.</c.P>
        <c.P>The <i>left downward</i> stroke is used as a “left leg” in many characters. It has the shape of an elephant tusk:</c.P>
        <c.Bookrow><Img name="pie_stroke.png" alt="" /></c.Bookrow>
        <c.P>The right downward stroke is often used as the right leg of a character. It should stand firmly on a little “foot” at the end of the leg.</c.P>
        <c.P>To write this stroke, you should feel the pen striving upward to the right, even as it slopes gently downwards. You finish the stroke by pressing a bit harder and changing direction to create the stable little foot.</c.P>
        <c.Bookrow><Img name="na_stroke.png" alt="" /></c.Bookrow>
        <c.P>The foot should not be at an angle with the rest of the stroke; this will create an ugly, broken impression:</c.P>
        <c.Bookrow><Img name="broken_ren.png" alt="" /></c.Bookrow>
        <c.P>Practice: Left and right downward strokes</c.P>
        <c.Bookrow>
          <c.CharacterBox simpChar="人" />
        </c.Bookrow>
        <c.P><c.Chinese>人</c.Chinese> is also the radical of <c.Chinese>你</c.Chinese> <i>you</i>, which we learned in the previous lesson. But here, the right downward stroke changes to a vertical stroke:</c.P>
        <c.Bookrow><c.CharacterBox simpChar="亻" /></c.Bookrow>
        <c.P>The phonetic is a rare character from the classical language which we don’t need to learn. Practice writing:</c.P>
        <c.Bookrow>
          <c.CharacterBox simpChar="你" />
        </c.Bookrow>
      </div>
    );
  }
}
