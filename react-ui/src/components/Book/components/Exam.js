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
          data: {}
        }}>
          <i>Work against the clock to maximize your final grade!</i>
        </c.P>
      </div>
    );
  }
}

export default Exam;
