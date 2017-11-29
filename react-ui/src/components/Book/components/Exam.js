import React, { Component } from 'react';
import { bookComponents as c } from '../../.';

class Exam extends Component {

  render() {
    return (
      <c.PartTitle type="secondary"
        buttonOptions={{
          type: 'exam',
          data: {}
        }}
      >
        Exam
      </c.PartTitle>
    );
  }
}

export default Exam;
