import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import moment from 'moment';
import squareLogoSmall from '../../images/square_logo_small.png';
import { GiftCodeForm, Spinner } from '../.';

const Wrapper = styled.div`
  border-radius: 10px;
  background-color: #ffffff;
  padding: 40px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.08);
  width: 560px;
  margin-top: 30px;
  font-size: 16px;
  > h2 {
    font-family: 'Open Sans';
  }
  @media (max-width: 585px) {
    padding-right: 15px;
    padding-left: 15px;
    width: auto;
  }
`;

const SpinnerWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const LogoWrapper = styled.div`
  height: 80px;
  width: 80px;
  > img {
    border-radius: 40px;
  }
`;

class Account extends Component {
  render() {
    if (!this.props.initialized) {
      return (
        <SpinnerWrapper>
          <Spinner />
        </SpinnerWrapper>
      );
    }
    return (
      <Wrapper>
        <LogoWrapper>
          <img height="100%" width="100%" src={squareLogoSmall} alt="ChineseMe logo" />
        </LogoWrapper>
        <h2>Account Details</h2>
        <span>Joining date: <b>{moment(this.props.createdAt).fromNow()}</b></span>
        <h2>Gift Code</h2>
        <p>Status: <b>{this.props.giftCodeActivated ? 'Activated' : 'Not activated'}</b></p>
        { !this.props.giftCodeActivated &&
          <div>
            <GiftCodeForm onSubmit={ this.props.onGiftCodeSubmit } />
            <p>Activating a Gift Code give you the possibility to unlock a Season of your choice for free in the <a href="/course">course</a>.</p>
            <p>Gift Codes can be obtained during promotional events or purchased from third party stores.</p>
          </div>
        }
        {
          this.props.giftCodeActivated &&
            <p>You have activated a Gift Code! You can now go to the <a href="/store">Store</a> and unlock a Season for free.</p>
        }
      </Wrapper>
    );
  }
}

Account.propTypes = {
  initialized: propTypes.bool.isRequired,
  userEmail: propTypes.string.isRequired,
  createdAt: propTypes.string.isRequired,
  giftCodeActivated: propTypes.bool,
  onGiftCodeSubmit: propTypes.func.isRequired
};

export default Account;
