import React, { Component } from 'react';
import { bookComponents as c } from '../../.';

class Exam extends Component {

  render() {
    return (
      <c.PartTitle
        anchor="exam"
        buttonOptions={{
          type: 'exam',
          data: {}
        }}
      >
        EXAM
      </c.PartTitle>
    );
  }
}

export default Exam;
