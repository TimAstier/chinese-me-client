import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { Row } from '../../Shared';
import { PlayAudioButton, WritingButton } from '../../../containers';

const Margin = styled.div`
    width: 125px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Body = styled.div`
  flex-grow: 1;
  max-width: 750px;
  display: flex;
  justify-content: ${props => props.center ? 'center' : 'flex-start'};
  align-items: center;
`;


class Bookrow extends Component {

  _renderAudioButton() {
    return <PlayAudioButton url={this.props.button.data.url}/>;
  }

  _renderWritingButton() {
    return <WritingButton characterId={this.props.button.data.characterId}/>;
  }

  _renderButton() {
    if (!this.props.button) {
      return null;
    }
    switch (this.props.button.type) {
      case 'audio': return this._renderAudioButton();
      case 'writing': return this._renderWritingButton();
      default: return null;
    }
  }

  render() {
    return (
      <Row marginBottom={this.props.marginBottom}>
        <Margin>{this._renderButton()}</Margin>
        <Body center={this.props.center}>
          { this.props.children }
        </Body>
        <Margin/>
      </Row>
    );
  }
}

Bookrow.propTypes = {
  children: propTypes.node.isRequired,
  marginBottom: propTypes.number,
  button: propTypes.shape({
    type: propTypes.oneOf(['audio', 'writing']).isRequired,
    data: propTypes.object.isRequired
  }),
  center: propTypes.bool
};

export default Bookrow;
