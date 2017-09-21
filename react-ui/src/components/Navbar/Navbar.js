import React, { Component } from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import logo from '../../images/logo.svg';
import iconSendFeedback from '../../images/iconSendFeedback.svg';
import userIcon from '../../images/defaultMaleUserIcon.svg';
import Clickable from '../Shared/Clickable';
import { Link } from 'react-router';

const Wrapper = styled.div`
  align-self: stretch;
  min-height: 70px;
  background-color: #363636;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.18);
  display: flex;
  z-index: 1;
`;

const LogoWrapper = styled.div`
  flex-basis: 186px;
  display: flex;
  justify-content: center;
  align-items: center
`;

const LeftMenuWrapper = styled.div`
  flex-basis: 186px;
  display: flex;
  justify-content: space-around;
  align-items: center
`;

const LeftMenuItem = styled.div`
  font-family: 'Open Sans';
  font-size: 20px;
  color: #ffffff;
`;

const RightMenuWrapper = styled.div`
  width: 130px;
  margin-left: auto;
  display: flex;
`;

const UserMenuWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
`;

const UserIconWrapper = styled.div`
  flex-grow: 1;
  display: flex:
  justify-content: center;
  align-items: center;
  padding-top: 5px;
`;

const SendFeedbackWrapper = styled.div`
  flex-basis: 93px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

class Navbar extends Component {

  render() {
    return (
      <Wrapper>
        <LogoWrapper>
          <Link to="/study" style={{ color: '#ffffff' }}>
            <img src={logo} alt="chineseMe logo"/>
          </Link>
        </LogoWrapper>
        <LeftMenuWrapper>
          <LeftMenuItem>
            <Clickable>
              <div onClick={this.props.openMapModal}>
                Index
              </div>
            </Clickable>
          </LeftMenuItem>
        </LeftMenuWrapper>
        <RightMenuWrapper>
          <UserMenuWrapper>
            <UserIconWrapper>
              {this.props.isAuthenticated &&
                <img src={userIcon} alt="user icon"/>}
            </UserIconWrapper>
          </UserMenuWrapper>
          <SendFeedbackWrapper>
            <Clickable>
              <img
                src={iconSendFeedback}
                alt="send feedback icon"
                onClick={this.props.askQuestion}
              />
            </Clickable>
          </SendFeedbackWrapper>
        </RightMenuWrapper>
      </Wrapper>
    );
  }
}

Navbar.propTypes = {
  askQuestion: propTypes.func.isRequired,
  openMapModal: propTypes.func.isRequired,
  isAuthenticated: propTypes.bool.isRequired
};

export default Navbar;
