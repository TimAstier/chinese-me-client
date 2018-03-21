import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { TakeMoney } from '../.';

const Wrapper = styled.div`
  border-radius: 10px;
  background-color: #ffffff;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.08);
  width: 50%;
  height: 500px;
  margin-top: 30px;
`;

class Account extends Component {
  render() {
    return (
      <Wrapper>
        <h1>My account</h1>
        <h2>My Books</h2>
        <p>Status: no subscription</p>
        <TakeMoney
          email={this.props.userEmail}
          productName="The basics"
          price={1900}
        />
      </Wrapper>
    );
  }
}

Account.propTypes = {
  userEmail: propTypes.string.isRequired
};

export default Account;
