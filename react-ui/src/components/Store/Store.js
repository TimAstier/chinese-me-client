import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import Immutable from 'immutable';
import { StoreItem, ScrollableWrapper, Spinner } from '../.';

const Header = styled.div`
  margin-top: 30px;
  max-width: 870px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 10px;
  padding-right: 10px;
  margin-bottom: 10px;
  h1 {
    margin-top: 5px;
    margin-bottom: 0;
  }
`;

const LinksTree = styled.span`
  font-family: 'Open Sans';
  font-size: 13px;
  font-weight: 600;
  color: #588cd7;
`;

const BookItemsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: flex-start;
  max-width: 870px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50px;
`;

const SpinnerWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

class Store extends Component {
  _renderBookItems() {
    if (this.props.seasons.size === 0) {
      return null;
    }
    const bookItems = this.props.seasons.valueSeq().map(s => {
      return (
        <StoreItem
          key={s.id}
          userEmail={this.props.userEmail}
          price={s.price}
          image={s.image}
          name={s.name}
          purchased={s.purchased}
          purchaseDate={s.purchaseDate}
          available={s.available}
          seasonId={s.id}
          giftCode={this.props.giftCode}
          unlockSeason={this.props.unlockSeason}
        />
      );
    });
    return <BookItemsWrapper>{bookItems}</BookItemsWrapper>;
  }

  render() {
    if (!this.props.initialized) {
      return (
        <SpinnerWrapper>
          <Spinner />
        </SpinnerWrapper>
      );
    }
    return (
      <ScrollableWrapper>
        <Header>
          <LinksTree>ChineseMe > Seasons</LinksTree>
          <h1>All Seasons</h1>
        </Header>
        { this._renderBookItems() }
      </ScrollableWrapper>
    );
  }
}

Store.propTypes = {
  userEmail: propTypes.string.isRequired,
  seasons: propTypes.instanceOf(Immutable.OrderedMap).isRequired,
  initialized: propTypes.bool.isRequired,
  giftCode: propTypes.bool,
  unlockSeason: propTypes.func.isRequired
};

export default Store;
