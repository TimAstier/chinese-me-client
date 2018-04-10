import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { ScreenButton } from '../.';
import { Popup } from 'semantic-ui-react';
import userIcon from '../../images/defaultMaleUserIcon.svg';
import { Link } from 'react-router';
import { UserPopup } from '../.';

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
  color: white;
`;

const Toggler = styled.div`
  height: 30px;
  width: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
`;

const Stripe = styled.div`
  background-color: white;
  height: 8px;
  border-radius: 2px;
`;

const LeftWrapper = styled.div`
  flex-grow: 1;
  max-width: 100px;  
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RightWrapper = styled.div`
  flex-grow: 1;
  max-width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MiddleWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const rightTrigger = (
  <img src={userIcon} alt=""/>
);

const leftTrigger = (
  <Toggler>
    <Stripe />
    <Stripe />
    <Stripe />
  </Toggler>
);

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  width: 120px;
  align-items: center;
  * {
    margin-top: 5px;
    margin-bottom: 5px;
  }
`;

const Item = styled.div`
  font-size: 16px;
  text-align: center;
  color: #7f8c94;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  :hover {
    background-color: #F2F7FA;
  }
`;

class MobileNavbar extends Component {
  render() {
    return (
      <Wrapper>
        <LeftWrapper>
          <Popup
            trigger={leftTrigger}
            positioning="bottom center"
            hoverable
          >
            <Menu>
              <Item>
                <Link to={'/'}>Home</Link>
              </Item>
              <Item onClick={this.props.askQuestion}>
                Ask Question
              </Item>
              <Item>
                <Link to={'/study/help'}>Help</Link>
              </Item>
            </Menu>
          </Popup>
        </LeftWrapper>
        <MiddleWrapper>
          <ScreenButton
            text="Table of Contents"
            width={160}
            height={38}
            fontSize={16}
            onClick={this.props.openMapModal}
          />
        </MiddleWrapper>
        <RightWrapper>
          {this.props.isAuthenticated &&
            <UserPopup logout={this.props.logout} />
          }
          {!this.props.isAuthenticated &&
            <Popup
              trigger={rightTrigger}
              positioning="bottom center"
              hoverable
            >
              <Menu>
                <Link to={'/login'}>
                  <ScreenButton
                    text="LOG IN"
                    width={100}
                    height={30}
                    fontSize={14}
                  />
                </Link>
                <Link to={'/signup'}>
                  <ScreenButton
                    text="REGISTER"
                    width={100}
                    height={30}
                    fontSize={14}
                    primary
                  />
                </Link>
              </Menu>
            </Popup>
          }
        </RightWrapper>
      </Wrapper>
    );
  }
}

MobileNavbar.propTypes = {
  askQuestion: propTypes.func.isRequired,
  openMapModal: propTypes.func.isRequired,
  isAuthenticated: propTypes.bool.isRequired,
  logout: propTypes.func.isRequired
};

export default MobileNavbar;
