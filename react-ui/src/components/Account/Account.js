import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

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
      </Wrapper>
    );
  }
}

Account.propTypes = {
  userEmail: propTypes.string.isRequired
};

export default Account;
