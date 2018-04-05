import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { Row } from '../../Shared';
import { PlayAudioButton, bookContainers as C } from '../../../containers';
import Media from 'react-media';

const Margin = styled.div`
  width: 125px;
  display: flex;
  justify-content: center;
  align-items: ${props => props.top ? 'flex-start' : 'center'};
`;

const Body = styled.div`
  flex-grow: 1;
  width: 750px;
  @media (max-width: 500px) {
    width: 100%;
  }
  display: flex;
  flex-direction: ${props => props.flexDirection};
  justify-content: ${props => props.center ? 'center' : 'flex-start'};
  align-items: ${props => props.flexDirection === 'row' ? 'center' : 'flex-start'};
  background-color: ${props => props.backgroundColor};
`;

// Should be DRYED with Row in /Shared
const Column = styled.div`
  page-break-inside: avoid;
  display: flex;
  @media print {
    display: ${props => props.noPrint ? 'none' : 'flex'};
  }
  flex-direction: column;
  margin-bottom: ${ props => props.marginBottom ?
    `${props.marginBottom}px` : undefined };
  margin-top: ${ props => props.marginTop ?
    `${props.marginTop}px` : undefined };
  line-height: ${ props => props.lineHeight ?
    `${props.lineHeight}px` : undefined };
  padding-left: 20px;
  padding-right: 20px;
`;

const BookButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 10px;
`;


class Bookrow extends Component {
  _renderAudioButton() {
    return (
      <PlayAudioButton
        url={this.props.buttonOptions.data.url}
        slowUrl={this.props.buttonOptions.data.slowUrl}
        text={this.props.buttonOptions.data.text}
        slow={this.props.buttonOptions.slow}
        toggleSlow={this.props.buttonOptions.toggleSlow}
        keyPress={false}
        requireActive
        origin={this.props.buttonOptions.origin}
        small
        trackClick
        printLink
      />
    );
  }

  _renderBookButton() {
    return (
      <C.BookButton
        buttonOptions={this.props.buttonOptions}
      />
    );
  }

  _renderButton() {
    if (!this.props.buttonOptions) {
      return null;
    }
    switch (this.props.buttonOptions.type) {
      case 'audio':
        return this._renderAudioButton();
      case 'calligraphy':
      case 'dialog':
      case 'stroke':
      case 'etymology':
      case 'exam':
      case 'practice':
      case 'review':
      case 'askUserSettings':
        return this._renderBookButton(this.props.buttonOptions);
      default: return null;
    }
  }

  _renderDesktopRow(marginBottom, marginTop) {
    return (
      <Row
        marginBottom={marginBottom || 15}
        marginTop={marginTop || 0}
        noPrint={this.props.noPrint}
      >
        <Margin top={this.props.buttonOptions ? this.props.buttonOptions.top : false}>
          {this._renderButton()}
        </Margin>
        <Body
          center={this.props.center}
          flexDirection={this.props.flexDirection ? this.props.flexDirection : 'row'}
          backgroundColor={this.props.backgroundColor ? this.props.backgroundColor : '#FFFFFF'}
        >
          { this.props.children }
        </Body>
        <Margin/>
      </Row>
    );
  }

  _renderMobileRow(marginBottom, marginTop) {
    return (
      <Column
        marginBottom={marginBottom || 15}
        marginTop={marginTop || 0}
        noPrint={this.props.noPrint}
      >
        <BookButtonWrapper>
          {this._renderButton()}
        </BookButtonWrapper>
        <Body
          center={this.props.center}
          flexDirection={this.props.flexDirection ? this.props.flexDirection : 'row'}
          backgroundColor={this.props.backgroundColor ? this.props.backgroundColor : '#FFFFFF'}
        >
          { this.props.children }
        </Body>
      </Column>
    );
  }

  render() {
    const { marginBottom, marginTop } = this.props;
    return (
      <Media query="(max-width: 500px)">
        {matches =>
          matches ? (
            this._renderMobileRow(marginBottom, marginTop)
          ) : (
            this._renderDesktopRow(marginBottom, marginTop)
          )
        }
      </Media>
    );
  }
}

Bookrow.propTypes = {
  children: propTypes.node.isRequired,
  marginBottom: propTypes.number,
  marginTop: propTypes.number,
  buttonOptions: propTypes.shape({
    type: propTypes.oneOf([
      'audio',
      'calligraphy',
      'dialog',
      'stroke',
      'etymology',
      'practice',
      'review',
      'exam',
      'askUserSettings'
    ]).isRequired,
    data: propTypes.object,
    clickable: propTypes.bool,
    top: propTypes.bool,
    slow: propTypes.bool,
    toggleSlow: propTypes.bool,
    origin: propTypes.string
  }),
  backgroundColor: propTypes.string,
  flexDirection: propTypes.oneOf(['row', 'column']),
  center: propTypes.bool,
  noPrint: propTypes.bool
};

export default Bookrow;
