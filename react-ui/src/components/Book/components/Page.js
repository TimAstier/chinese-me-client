import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 30px auto 50px;
  min-height: 640px;
  width: 1000px;
  border-radius: 10px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.08);
  background-color: white;
  ${''/* display: flex;
  flex-direction: column;
  align-items: center; */}
  padding-top: 80px;
  font-size: 21px;
  font-family: 'Cambria';
  a {
    text-decoration:  underline;
  }
  @media print {
    box-shadow: none;
  }
`;

const Footer = styled.div`
  min-height: 100px;
  font-size: 18px;
  color: grey;
  display: flex;
  justify-content: center;
`;

/* Do not use Flexbox in the div around content
** as otherise the page-break features from CSS */

class Page extends Component {
  render() {
    return (
      <Wrapper>
        <div>
          {this.props.children}
        </div>
        <Footer>
          {this.props.number}
        </Footer>
      </Wrapper>
    );
  }
}

Page.propTypes = {
  children: propTypes.node.isRequired,
  number: propTypes.number
};

export default Page;
