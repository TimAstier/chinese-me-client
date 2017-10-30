import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { Motion, spring } from 'react-motion';

const Wrapper = styled.div`
  width: 600px;
  height: 15px;
  border-radius: 10px;
  background-color: #f2f7fa;
  box-shadow: inset 0 1px 8px 0 rgba(0, 0, 0, 0.05);
`;

class Progressbar extends Component {

  render() {
    const width = this.props.completionPercentage ?
      this.props.completionPercentage * 6 : 0;
    const Progress = styled.div`
      width: ${props => props.width + 'px'};
      height: 15px;
      border-radius: 10px;
      background-image: linear-gradient(to right, #8edcff, #55b6ff);
      box-shadow: 0 2px 5px 0 rgba(85, 182, 255, 0.4);
    `;
    return (
      <Wrapper>
        <Motion
          defaultStyle={{ y: 0 }}
          style={{ y: spring(width) }}
        >
          { ({ y }) => (
            <Progress width={y}/>
          )}
        </Motion>
      </Wrapper>
    );
  }
}

Progressbar.propTypes = {
  completionPercentage: propTypes.number
};

export default Progressbar;
