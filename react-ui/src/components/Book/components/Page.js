import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  font-size: 16px;
  p {
    text-align: justify;
    text-justify: inter-word;
  }
  margin: 30px auto 50px;
  min-height: 640px;
  width: 700px;
  border-radius: 10px;
  background-color: #ffffff;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  padding: 80px 70px 0px;
`;

const Body = styled.div`
  flex-grow: 1;
`;

const Footer = styled.div`
  min-height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

class Page extends Component {

  render() {
    return (
      <Wrapper>
        <Body>
          {this.props.children}
        </Body>
        <Footer>
          {this.props.number}
        </Footer>
      </Wrapper>
    );
  }
}

Page.propTypes = {
  children: propTypes.node.isRequired,
  number: propTypes.number.isRequired
};

export default Page;
