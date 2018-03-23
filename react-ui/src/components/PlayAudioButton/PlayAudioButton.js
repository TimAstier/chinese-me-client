import React, { Component } from 'react';
import propTypes from 'prop-types';
import iconPlayAudio from '../../images/iconPlayAudio.svg';
import styled from 'styled-components';
import { PRODUCTION_ROOT_URL, PDF_VERSION} from '../../constants/urls';
import { PlayingLoop, Spinner } from '../.';

const Wrapper = styled.div`
  height: ${props => `${props.size}px`};
  width: ${props => `${props.size}px`};
  :hover {
    opacity: 0.92;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  a {
    pointer-events: none;
  }
  @media print {
    a {
      pointer-events: auto;
    }
  }
  @media (max-width: 500px) {
    width: 25px;
    height: 25px;
  }
`;

class PlayAudioButton extends Component {
  constructor(props) {
    super(props);
    this.state = { active: false };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.isPlaying === true && this.state.active === true) {
      if (nextProps.isPlaying === false) {
        this.setState({ active: false });
      }
    }
  }

  _size() {
    if (this.props.small) { return 30; }
    if (this.props.big) { return 80; }
    return 40;
  }

  _renderIcon() {
    const { isLoading, isPlaying, requireActive } = this.props;
    if (isLoading) {
      if (!requireActive || (requireActive && this.state.active === true)) {
        return <Spinner size={ this._size() } />;
      }
    }
    if (isPlaying) {
      if (!requireActive || (requireActive && this.state.active === true)) {
        return <PlayingLoop size={ this._size() } />;
      }
    }
    return (
      <img
        src={iconPlayAudio}
        alt=""
        height={this._size()}
        width={this._size()}
      />
    );
  }

  _handleClick() {
    this.setState({ active: true });
    return this.props.onClick();
  }

  render() {
    return (
      <Wrapper
        onClick={this._handleClick.bind(this)}
        size={this._size()}
      >
        <a href={PRODUCTION_ROOT_URL + this.props.currentUrl + '/?utm_source=pdf_v' + PDF_VERSION}>
          {this._renderIcon()}
        </a>
      </Wrapper>
    );
  }
}

PlayAudioButton.propTypes = {
  onClick: propTypes.func.isRequired,
  isPlaying: propTypes.bool,
  isLoading: propTypes.bool.isRequired,
  small: propTypes.bool,
  big: propTypes.bool,
  printLink: propTypes.bool,
  currentUrl: propTypes.string.isRequired,
  requireActive: propTypes.bool
};

export default PlayAudioButton;
