import React, { Component } from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import logo from '../../images/logo.svg';
import helpIcon from '../../images/helpIcon.svg';
import messageIcon from '../../images/messageIcon.svg';
import Clickable from '../Shared/Clickable';
import { Link } from 'react-router';
import { UserPopup } from '../.';
import { ScreenButton } from '../.';

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  min-height: 55px;
  background-color: #363636;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.18);
  display: flex;
  z-index: 1;
  @media print {
    display: none;
  }
`;

const Icon = styled.img`
  height: 35px;
  width: 35px;
`;

const LogoWrapper = styled.div`
  flex-basis: 186px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LeftMenuWrapper = styled.div`
  flex-basis: 250px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const LeftMenuItem = styled.div`
  font-family: 'Open Sans';
  font-size: 20px;
  color: #ffffff;
`;

const RightMenuWrapper = styled.div`
  width: 320px;
  margin-left: auto;
  display: flex;
`;

const UserMenuWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  margin-top: -5px;
  align-items: center;
  cursor: pointer;
`;

const UserIconWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 5px;
  justify-content: flex-end;
`;

const LoginLinks = styled.div`
  margin-top: 5px;
  display: flex;
  justify-content: space-between;
  min-width: 245px;
  padding-right: 10px;
  padding-left: 10px;
`;

const IconWrapper = styled.div`
  flex-basis: 93px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

class DesktopNavbar extends Component {
  render() {
    return (
      <Wrapper>
        <LogoWrapper>
          <Link to={'/study'}>
            <img src={logo} alt="chineseMe logo"/>
          </Link>
        </LogoWrapper>
        <LeftMenuWrapper>
          <LeftMenuItem>
            <ScreenButton
              text="Table of Contents"
              width={160}
              height={38}
              fontSize={16}
              onClick={this.props.openMapModal}
            />
          </LeftMenuItem>
          <LeftMenuItem>
            <IconWrapper>
              <Clickable>
                <Link to={'/help'}>
                  <Icon src={helpIcon} />
                </Link>
              </Clickable>
            </IconWrapper>
          </LeftMenuItem>
        </LeftMenuWrapper>
        <RightMenuWrapper>
          <UserMenuWrapper>
            <UserIconWrapper>
              {
                this.props.isAuthenticated &&
                  <UserPopup logout={this.props.logout} />
              }
            </UserIconWrapper>
            {
              !this.props.isAuthenticated &&
                <LoginLinks>
                  <Link to={'/login'}>
                    <ScreenButton
                      text="LOG IN"
                      width={100}
                      height={35}
                      fontSize={14}
                    />
                  </Link>
                  <Link to={'/signup'}>
                    <ScreenButton
                      text="REGISTER"
                      width={100}
                      height={35}
                      fontSize={14}
                      primary
                    />
                  </Link>
                </LoginLinks>
            }
          </UserMenuWrapper>
          <IconWrapper>
            <Clickable>
              <Icon
                src={messageIcon}
                alt=""
                onClick={this.props.askQuestion}
              />
            </Clickable>
          </IconWrapper>

        </RightMenuWrapper>
      </Wrapper>
    );
  }
}

DesktopNavbar.propTypes = {
  askQuestion: propTypes.func.isRequired,
  openMapModal: propTypes.func.isRequired,
  isAuthenticated: propTypes.bool.isRequired,
  logout: propTypes.func.isRequired
};

export default DesktopNavbar;
