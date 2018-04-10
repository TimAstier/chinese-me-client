import React, { Component } from 'react';
import { bookComponents as c } from '../../.';
import Img from '../../Shared/Img';

export default class Content extends Component {
  render() {
    return (
      <div>
        <c.P>The character <c.Chinese>国</c.Chinese> <b>guó</b> <i>country</i> illustrates how the Chinese writing system has been simplified in the People’s Republic. The most ancient form of <b>guó</b> is a picture of a ceremonial <i>weapon</i> over a <i>mouth</i>:</c.P>
        <c.Bookrow>
          <Img name="country_1.png" alt="" />
        </c.Bookrow>
        <c.P>The character <i>mouth</i> was often used in the sense of <i>mouths to feed</i> to describe <i>the masses, the many people</i>. So the character for <i>country</i> literally shows masses of people protected – or perhaps dominated? – by the martial power of the king. Later, a frame meaning <i>borders</i> was added to this picture.</c.P>
        <c.Bookrow>
          <Img name="country_2.png" alt="" />
        </c.Bookrow>
        <c.P>In the 1950’s, in order to promote literacy, the Chinese government simplified about a third of the more common characters. Most of these simplifications were based on historical precedent: the reformers used older, more easily written versions that had fallen into disuse. In the case of <b>guó</b>, they decided on a variant with the character for <i>jade</i> inside.</c.P>
        <c.Bookrow>
          <Img name="country_3.png" alt="" />
        </c.Bookrow>
      </div>
    );
  }
}
