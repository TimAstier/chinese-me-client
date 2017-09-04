import React, { Component } from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import logo from '../../images/logo.svg';
import iconSendFeedback from '../../images/iconSendFeedback.svg';
import userIcon from '../../images/defaultMaleUserIcon.svg';
import Clickable from '../Shared/Clickable';
import { browserHistory } from 'react-router';

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
  width: 217px;
  margin-left: auto;
  display: flex;
`;

const UserMenuWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
`;

const UsernameWrapper = styled.div`
  flex-grow: 2;
  display: flex:
  justify-content: center;
  align-items: center;
  font-family: 'Open Sans';
	font-size: 14px;
	font-weight: bold;
	text-align: right;
	color: #ffffff;
  margin-right: 10px;
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
        <LogoWrapper><img src={logo} alt="chineseMe logo"/></LogoWrapper>
        <LeftMenuWrapper>
          <LeftMenuItem>
            <Clickable>
              <div onClick={() => browserHistory.push('/select')}>
                Home
              </div>
            </Clickable>
          </LeftMenuItem>
          <LeftMenuItem>
            <Clickable>
              <div onClick={this.props.openMapModal}>
                Map
              </div>
            </Clickable>
          </LeftMenuItem>
        </LeftMenuWrapper>
        <RightMenuWrapper>
          <UserMenuWrapper>
            <UsernameWrapper>
              <div>Hi,</div>
              <div>Zhengkuan</div>
            </UsernameWrapper>
            <UserIconWrapper>
              <img src={userIcon} alt="user icon"/>
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
  openMapModal: propTypes.func.isRequired
};

export default Navbar;
