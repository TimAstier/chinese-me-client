import React, { Component } from 'react';
import { bookComponents as c } from '../../.';
import Img from '../../Shared/Img';

export default class Content extends Component {
  render() {
    return (
      <div>
        <c.P>The character <c.Chinese>叫</c.Chinese> <b>jiào</b> <i>to call</i> consists of the radical <c.Chinese>口</c.Chinese> <i>mouth</i> and the phonetic <c.Chinese>丩</c.Chinese>:</c.P>
        <c.Bookrow><Img src="https://s3.eu-west-2.amazonaws.com/chineseme/images/kou_plus_jiu.png" alt="" /></c.Bookrow>
        <c.P>Clearly, <i>calling</i> is something you do with your mouth. But the pronunciation of the phonetic is <b>jīu</b>, which may not seem very similar to <b>jiào</b>. Over hundreds of years, the Chinese sound system has changed a lot, so the phonetic usually does not give us the exact modern pronunciation. In the same way, the radical of a character only points to a general category. Even so, these hints of meaning and pronunciation can make it easier for us to memorize characters. Some radicals, such as <c.Chinese>口</c.Chinese> <i>mouth</i>, are so common that you will quickly start to recognize them.</c.P>
      </div>
    );
  }
}
