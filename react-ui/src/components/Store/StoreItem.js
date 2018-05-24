import React, { Component } from 'react';
import propTypes from 'prop-types';
import { TakeMoney } from '../../containers';
import { Link } from 'react-router';
import { ScreenButton } from '../.';
import styled from 'styled-components';
import assetEndpointToUrl from '../../helpers/assetEndpointToUrl';
import userIcon from '../../images/defaultMaleUserIcon.svg';
import moment from 'moment';


const Wrapper = styled.div`
  max-width: 425px;
  background-color: #ffffff;
  flex-grow: 1;
  border-radius: 5px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.08);
  margin-top: 10px;
  margin-bottom: 10px;
  h2 {
    font-size: 14px;
    font-weight: 700;
    font-family: 'Open Sans';
  }
`;

const Img = styled.img`
  max-width: 100px;
  height: auto;
`;

const Header = styled.div`
  display: flex;
  border-bottom: 1px solid #ddd;
  padding-top: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-bottom: 8px;
`;

const Details = styled.div`
  flex-grow: 1;
  max-width: 325px;
  margin-left: 10px;
  height: 100px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  div {
    display: flex;
    justify-content: space-between;
    max-width: 230px;
  }
`;

const Free = styled.span`
  margin-left: 10px;
  margin-top: 3px;
  color: #55b6ff;
  font-size: 16px;
`;

const Price = styled.span`
  margin-left: 10px;
  margin-top: 3px;
  text-decoration: ${ props => props.giftCode ? 'line-through' : 'none' };
`;

const Owned = styled.span`
  color: #55b6ff;
  margin-top: 3px;
  text-align: center;
  flex-grow: 1;
`;

const Footer = styled.div`
  padding-top: 10px;
  padding-bottom: 10px;
  padding-right: 10px;
  padding-left: 10px;
  display: flex;
  justify-content: space-between;
  color: #868686;
`;

const Author = styled.div`
  img {
    height: 20px;
    width: 20px;
  }
  span {
    margin-left: 10px;
  }
  display: flex;
`;

const Row = styled.div`
  display: flex;
  min-width: 100%;
`;

class StoreItem extends Component {
  _renderOwned() {
    return (
      <Owned>
        <i>
          {'Purchased ' + moment(this.props.purchaseDate).fromNow() }
        </i>
      </Owned>
    );
  }

  _renderUnlockButton() {
    return (
      <ScreenButton
        primary
        text="Unlock"
        fontSize={14}
        height={25}
        onClick={() => this.props.unlockSeason(this.props.seasonId)}
        width={75}
      />
    );
  }

  _renderPurchaseButton() {
    return (
      <TakeMoney
        email={this.props.userEmail}
        productName={this.props.name}
        price={this.props.price * 100}
        seasonId={this.props.seasonId}
      />
    );
  }

  _renderLink() {
    return (
      <Link to={'/course'}>
        <ScreenButton
          primary= {this.props.purchased}
          text={this.props.purchased ? 'Study' : 'Browse'}
          width={75}
          height={25}
          fontSize={14}
        />
      </Link>
    );
  }

  _renderAvailability() {
    if (this.props.available) {
      if (this.props.purchased) {
        return (
          <Row>
            { this._renderLink() }
            { this._renderOwned() }
          </Row>
        );
      }
      return (
        <div>
          { this._renderLink() }
          { this.props.giftCode ? this._renderUnlockButton() : this._renderPurchaseButton() }
          { this.props.giftCode && <Free>$0</Free> }
          <Price giftCode={this.props.giftCode}>
            {`$${this.props.price}`}
          </Price>
        </div>
      );
    }
    return (
      <span><i><b>Coming soon...</b></i></span>
    );
  }

  render() {
    return (
      <Wrapper>
        <Header>
          <Img src={assetEndpointToUrl('/images/' + this.props.image)} alt=""/>
          <Details>
            <h2>{this.props.name}</h2>
            {this._renderAvailability()}
          </Details>
        </Header>
        <Footer>
          <span>Integrated Chinese course</span>
          <Author><img src={userIcon} alt=""/><span>By: ChineseMe</span></Author>
        </Footer>
      </Wrapper>
    );
  }
}

StoreItem.propTypes = {
  userEmail: propTypes.string.isRequired,
  price: propTypes.number.isRequired,
  name: propTypes.string.isRequired,
  image: propTypes.string.isRequired,
  purchased: propTypes.bool.isRequired,
  available: propTypes.bool,
  seasonId: propTypes.number.isRequired,
  purchaseDate: propTypes.string,
  giftCode: propTypes.bool,
  unlockSeason: propTypes.func.isRequired
};

export default StoreItem;
