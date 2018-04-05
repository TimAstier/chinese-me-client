import React, { Component } from 'react';
import { bookComponents as c } from '../../.';
import Img from '../../Shared/Img';
// import { Row } from '../../Shared';

export default class Content extends Component {
  render() {
    return (
      <div>
        <c.P>The modern character for <i>horse</i> has been simplified so many times over the ages that it no longer looks much like a picture:</c.P>
        <c.Bookrow><Img name="horse_1.png" alt="" /></c.Bookrow>
        <c.P>But before the simplification reform in the 1950’s, the traditional character still featured a mane and four hooves:</c.P>
        <c.Bookrow><Img name="horse_2.png" alt="" /></c.Bookrow>
        <c.P>And the further back we trace the origins of this character, the clearer the image becomes:</c.P>
        <c.Bookrow><Img name="horse_3.png" alt="" /></c.Bookrow>
      </div>
    );
  }
}
