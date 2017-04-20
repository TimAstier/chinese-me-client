import React, { Component, PropTypes } from 'react';
import { Image } from 'semantic-ui-react';
import logo from '../../logo.png';

class Coach extends Component {
  render() {
    return (
      <div id="coach">
        <Image
          id="coach-img"
          src={logo}
          alt="ChineseMe logo"
          shape="circular"
          centered
          size="tiny"
        />
        <div className="comment">
          <p>{this.props.comment}</p>
        </div>
      </div>
    );
  }
}

Coach.propTypes = {
  comment: PropTypes.string.isRequired
};

export default Coach;
