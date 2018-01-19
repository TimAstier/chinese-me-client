import React, { Component } from 'react';
import { bookComponents as c } from '../../.';
// import { Row } from '../../Shared';

export default class Content extends Component {
  render() {
    return (
      <div>
        <c.P>
          Chinese culture venerates education – as well as the written language that is its foundation. The traditional form of the character <c.Chinese>写</c.Chinese> <i>Wwrite</i> illustrates this tradition. The lid <c.Chinese>冖</c.Chinese> at the top is a picture of a <i>roof</i> and appears in characters denoting <i>house</i>, <i>home</i>, <i>temple</i>; but also in characters for abstract concepts like <i>protect</i> and <i>spend the night</i>. The bottom part shows two hands presumably reading aloud to two students or scribes. In the simplified character, only one of the pupils remain.
        </c.P>
        <c.Bookrow><img src="https://s3.eu-west-2.amazonaws.com/chineseme/images/write.png" alt="" /></c.Bookrow>
      </div>
    );
  }
}
