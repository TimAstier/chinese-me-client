import React, { Component } from 'react';
import { bookComponents as c } from '../../.';
import { Row } from '../../Shared';

export default class Content extends Component {
  render() {
    return (
      <div>
        <c.PartTitle type="secondary">Radicals for meaning – phonetics for sound</c.PartTitle>
        <c.P>As the written language developed and more characters were needed, the ancient scribes started combining simple pictorial elements into more complex characters. Some elements were chosen for <i>meaning</i>; others for <i>sound</i>.</c.P>
        <c.P>As an example, let us look again at the character meaning <i>to scold, tell somebody off</i>:</c.P>
        <c.Bookrow>
          <Row>
            <c.Char>骂</c.Char>
            <c.Pinyin>mà</c.Pinyin>
            <c.Meaning>scold</c.Meaning>
          </Row>
        </c.Bookrow>
        <c.P>It is made up of two ancient character elements: <c.Chinese>口</c.Chinese> <i>mouth</i>, and <c.Chinese>马</c.Chinese> <i>horse</i>. Why did the scribes choose these two components?</c.P>
        <c.P>The <i>mouth</i> element contributes <i>meaning</i>. It appears in characters such as <i>eat</i>, <i>drink</i>, <i>kiss</i> and <i>ask</i> – things you do with your mouth. A character component indicating meaning in this way is called a <i>radical</i>. In the character for <i>scold</i>, the radical is duplicated for emphasis: there are two <i>mouths</i> that really illustrate somebody getting a good telling-off.</c.P>
        <c.P>The <i>horse</i> component has nothing to do with meaning. It was chosen to give an indication of <i>pronunciation</i> and also appears in several other characters that sound similar to <c.Chinese>骂</c.Chinese>, for example <i>mother</i>, which has <i>woman</i> as radical:</c.P>
        <c.Bookrow>
          <Row>
            <c.Char>妈</c.Char>
            <c.Pinyin>mā</c.Pinyin>
            <c.Meaning>mother</c.Meaning>
          </Row>
        </c.Bookrow>
        <c.P>A character element indicating sound in this way is called a <i>phonetic</i>. To summarize, the ancient scribes would make new characters by combining a radical for meaning with a phonetic for sound to write “something you do with your mouth which sounds similar to horse” or “a female person which sounds similar to horse”:</c.P>
        <c.Bookrow><img src="https://s3.eu-west-2.amazonaws.com/chineseme/images/combinations.png" alt="" /></c.Bookrow>
        <c.P>The radical <c.Chinese>口</c.Chinese> <i>mouth</i> also appears in the character <c.Chinese>叫</c.Chinese> <i>to call</i>:</c.P>
        <c.Bookrow><img src="https://s3.eu-west-2.amazonaws.com/chineseme/images/kou_plus_jiu.png" alt="" /></c.Bookrow>
        <c.P>Clearly, <i>calling</i> is something you do with your mouth. But the pronunciation of the phonetic <c.Chinese>丩</c.Chinese> is <b>jīu</b>, which may not seem very similar to <b>jiào</b>. Over hundreds of years, the Chinese sound system has changed a lot, so the phonetic usually does not give us the exact modern pronunciation. In the same way, the radical of a character only points to a general category. Even so, these hints of meaning and pronunciation can make it easier for us to memorize characters. Some radicals are so common that you will quickly start to recognize them.</c.P>
      </div>
    );
  }
}
