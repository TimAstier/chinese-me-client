import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { Breadcrumb } from 'semantic-ui-react';
import { Link } from 'react-router';
import { ScreenButton } from '../.';
import { TakeMoney } from '../../containers';
import { Img } from '../Shared';

import { Spinner } from '../.';
import { EpisodeCard, ScrollableWrapper } from '../../containers';
import Immutable from 'immutable';
import * as models from '../../models';

const PREORDER_PRICE = 900;

const SpinnerWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const ScreenWrapper = styled.div`
  margin: 15px auto 50px;
  min-height: 640px;
  width: 85%;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  margin-top: 15px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 20px;
  padding-right: 20px;
`;

const TitleWrapper = styled.div`
  height: 35px;
  font-family: 'Open Sans';
	font-size: 35px;
  @media(max-width: 658px) {
    font-size: 24px;
  }
  font-weight: bold;
	color: #454545;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

const EpisodeCardsWrapper = styled.div`
  max-width: 950px;
  margin-top: 16px;
  margin-bottom: 16px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const PurchaseWrapper = styled.div`
  margin-top: 15px;
  margin-bottom: 15px;
  margin-left: auto;
  margin-right: auto;
  max-width: 700px;
  width: 95%;
  padding-top: 15px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  background-color: #ffffff;
  font-size: 18px;
  line-height: 25px;
  background-color: lightyellow;
`;

const Free = styled.span`
  margin-left: 10px;
  margin-top: 3px;
  color: #55b6ff;
  font-size: 16px;
`;

const PurchaseButtonWrapper = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
`;

class SelectEpisode extends Component {
  _renderUnlockButton() {
    return (
      <ScreenButton
        primary
        text="Unlock for free"
        onClick={() => this.props.unlockSeason(this.props.season.id)}
        width={180}
        height={40}
        fontSize={16}
      />
    );
  }

  _renderPurchaseButton() {
    return (
      <TakeMoney
        email={this.props.userEmail}
        productName={this.props.season.name}
        price={this.props.season.price * 100}
        seasonId={this.props.season.id}
      />
    );
  }

  _renderPreorderButton() {
    return (
      <TakeMoney
        preorder
        email={this.props.userEmail}
        productName={this.props.season.name}
        price={PREORDER_PRICE}
        seasonId={this.props.season.id}
      />
    );
  }

  renderEpisodeCards() {
    const episodeCards = [];
    this.props.episodes.forEach((episode, i) => {
      return episodeCards.push(
        <EpisodeCard
          key={i}
          episode={episode}
          seasonNumber={this.props.seasonNumber}
        />
      );
    });
    return episodeCards;
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
          <Breadcrumb>
            <Breadcrumb.Section>
              <Link to="/">Home</Link>
            </Breadcrumb.Section>
            <Breadcrumb.Divider icon="right chevron" />
            <Breadcrumb.Section>
              <Link to="/course">Course</Link>
            </Breadcrumb.Section>
            <Breadcrumb.Divider icon="right chevron" />
            <Breadcrumb.Section active>
              {`Season ${this.props.seasonNumber}`}
            </Breadcrumb.Section>
          </Breadcrumb>
        </Header>
        { !this.props.season.purchased && !this.props.season.available && !this.props.giftCode &&
          <PurchaseWrapper>
            <div><b>This Season is under development.</b></div>
            <div><i>Pre-order it to support the course and get a $10 discount:</i></div>
            <PurchaseButtonWrapper>
              { this._renderPreorderButton() }
            </PurchaseButtonWrapper>
            <a href="https://stripe.com">
              <Img name="powered-by-stripe.png" maxWidth={135}/>
            </a>
          </PurchaseWrapper>
        }
        { !this.props.season.purchased && this.props.season.available && !this.props.giftCode &&
          <PurchaseWrapper>
            <div><b>You have access to the first three episodes. Feel free to try them!</b></div>
            <div><i>Enjoying this course? Purchase an access to the full season:</i></div>
            <PurchaseButtonWrapper>
              { this._renderPurchaseButton() }
            </PurchaseButtonWrapper>
            <a href="https://stripe.com">
              <Img name="powered-by-stripe.png" maxWidth={135}/>
            </a>
          </PurchaseWrapper>
        }
        { !this.props.season.purchased && this.props.season.available && this.props.giftCode &&
          <PurchaseWrapper>
            <div><b>You have access to the first three episodes. Feel free to try them!</b></div>
            <div><i>Enjoying this course? You can use your gift code to unlock this season:</i></div>
            <br />
            <div style={ { textDecoration: 'line-through' } }>
              { this.props.season.price
                .toLocaleString('en-US', {style: 'currency', currency: 'USD'})
              }
            </div>
            <Free>
              FREE
            </Free>
            { this._renderUnlockButton() }
          </PurchaseWrapper>
        }
        <ScreenWrapper>
          <TitleWrapper>{this.props.season.name}</TitleWrapper>
          <EpisodeCardsWrapper>{this.renderEpisodeCards()}</EpisodeCardsWrapper>
        </ScreenWrapper>
      </ScrollableWrapper>
    );
  }
}

SelectEpisode.propTypes = {
  episodes: propTypes.instanceOf(Immutable.OrderedMap).isRequired,
  seasonNumber: propTypes.number.isRequired,
  userEmail: propTypes.string,
  initialized: propTypes.bool.isRequired,
  giftCode: propTypes.bool,
  unlockSeason: propTypes.func.isRequired,
  season: propTypes.instanceOf(models.Season)
};

export default SelectEpisode;
