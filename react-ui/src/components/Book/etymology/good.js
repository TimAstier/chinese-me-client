import React, { Component } from 'react';
import { bookComponents as c } from '../../.';
// import { Row } from '../../Shared';

export default class Content extends Component {
  render() {
    return (
      <div>
        <c.P>We have seen that the most ancient Chinese characters were pictures which, as the written language developed, were gradually combined into more complex characters. Most of these were combinations of a radical indicating meaning, and a phonetic hinting at the sound. But some characters were based on different logic.</c.P>
        <c.P>Take <c.Chinese>好</c.Chinese> for example. The element on the left is the radical <c.Chinese>女</c.Chinese> which means <i>woman</i>, and the element on the right is the character <c.Chinese>子</c.Chinese> <i>son, child</i>. This is how it looked on the oracle bones:</c.P>
        <c.Bookrow><img src="https://s3.eu-west-2.amazonaws.com/chineseme/images/hao_jiaguwen.png" alt="" /></c.Bookrow>
        <c.P><c.Chinese>女</c.Chinese> on the left hand side is a pictogram. On the oracle bones, it shows a woman seated on her folded legs, in a pose we still recognize from tea ceremonies today. The arms are crossed in front of the body – or perhaps busy with daily chores.</c.P>
        <c.Bookrow><img src="https://s3.eu-west-2.amazonaws.com/chineseme/images/nv_jiaguwen.png" alt="" /></c.Bookrow>
        <c.P>As you can see, the modern character for woman looks different from the original pictogram. As the writing system developed over the centuries, the characters were standardized and stylized. But it still possible to identify the strokes of the ancient oracle bone character.</c.P>
        <c.P>The character <c.Chinese>子</c.Chinese> <i>son, child</i> on the right hand side is even easier to recognize. It, too, is a pictogram. The oracle bone specimens show a swaddled baby, sometimes with its little arms straight out, sometimes flailing wildly in a way any parent would recognize:</c.P>
        <c.Bookrow><img src="https://s3.eu-west-2.amazonaws.com/chineseme/images/zi_jiaguwen.png" alt="" /></c.Bookrow>
        <c.P>Together, <i>woman</i> and <i>child</i> form the character <c.Chinese>好</c.Chinese>, which means <i>good</i>, <i>nice</i>, <i>fine</i>. To the ancients, the idea of a woman caring for a small baby was the very embodiment of something “good”. This is an example of an <i>ideogram</i>, a character where each element contributes to the meaning.</c.P>
        <c.P>Even in characters with a radical and a phonetic, the phonetic was often chosen with an eye for meaning in addition to sound. One example is <c.Chinese>姓</c.Chinese>, where the phonetic <c.Chinese>生</c.Chinese> <b>shēng</b> means <i>give birth to</i> or <i>be born</i>. ”Born of woman”: <i>to have as family name</i>.</c.P>
      </div>
    );
  }
}
