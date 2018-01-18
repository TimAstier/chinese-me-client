import React, { Component } from 'react';
import { bookComponents as c } from '../../.';
// import { Row } from '../../Shared';

export default class Content extends Component {
  render() {
    return (
      <div>
        <c.P>The oracle bone character for <c.Chinese>大</c.Chinese> <b>dà</b> <i>large</i> was a picture of a large man standing up, with legs spread firmly on the ground:</c.P>
        <c.Bookrow><img src="https://s3.eu-west-2.amazonaws.com/chineseme/images/large.png" alt="" /></c.Bookrow>
      </div>
    );
  }
}
