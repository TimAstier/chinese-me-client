import React, { Component } from 'react';
import { bookComponents as c } from '../../.';

class Exam extends Component {
  render() {
    return (
      <div>
        <c.PartTitle
          anchor="exam"
          name="exam"
        />
        <c.P buttonOptions={{
          type: 'exam',
          data: null
        }}>
          <i>Finish the exam for this episode and try to maximize your final grade!</i>
        </c.P>
      </div>
    );
  }
}

export default Exam;
