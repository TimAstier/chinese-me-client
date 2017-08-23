import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 600px;
  height: 15px;
  border-radius: 10px;
  background-color: #f2f7fa;
  box-shadow: inset 0 1px 8px 0 rgba(0, 0, 0, 0.05);
`;

class Progressbar extends Component {

  render() {
    const Progress = styled.div`
      width: ${this.props.completionPercentage * 6 + 'px'};
      height: 15px;
      border-radius: 10px;
      background-image: linear-gradient(to right, #8edcff, #55b6ff);
      box-shadow: 0 2px 5px 0 rgba(85, 182, 255, 0.4);
    `;
    return (
      <Wrapper>
        <Progress />
      </Wrapper>
    );
  }
}

Progressbar.propTypes = {
  completionPercentage: propTypes.number.isRequired
};

export default Progressbar;
