import React, { Component } from 'react';
// import propTypes from 'prop-types';
import { bookComponents as c } from '../../.';

class Review extends Component {
  render() {
    return (
      <div>
        <c.PartTitle anchor="review" name="review" />
        <c.P
          buttonOptions={{
            type: 'review',
            data: null
          }}
        >
          <i>Now, go through the review exercises to practice pronunciation, characters, grammar patterns and vocabulary. Then do the Exam before continuing to the next Lesson.</i>
        </c.P>
      </div>
    );
  }
}

// Review.propTypes = {};

export default Review;
