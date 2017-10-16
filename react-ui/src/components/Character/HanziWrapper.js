import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import hanziWriterConfig from '../../constants/hanziWriterConfig';

const Wrapper = styled.div`
  margin-top: 20px;
  width: ${`${hanziWriterConfig.width}px`};
  min-height: ${`${hanziWriterConfig.height}px`};
  border-radius: 15px;
  background-color: #ffffff;
  box-shadow: 0 2px 7px 0 rgba(0, 0, 0, 0.08);
  border: solid 2px #dce6eb;
  font-size: 100px;
  font-family: 'STKaitiSC';
	color: #454545;
  display: flex;
`;

class HanziWrapper extends Component {

  render() {
    return (
      <Wrapper>
        <div ref={this.props.reference} />
      </Wrapper>
    );
  }
}

HanziWrapper.propTypes = {
  // Using 'ref' as prop name doesn't work (seems to be reserved)
  reference: propTypes.func.isRequired
};

export default HanziWrapper;
