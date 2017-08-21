import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { Icon } from 'semantic-ui-react';

const Wrapper = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  color: #454545;
  :hover {
    color: #55b6ff;
  }
  cursor: pointer;
`;

const CheckmarkWrapper = styled.div`
  flex-basis: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TitleWrapper = styled.div`
  font-family: 'STKaitiSC';
  flex-grow: 1;
  display: flex;
  align-items: center;
	height: 20px;
	font-size: 18px;
	font-weight: 900;
`;

class MapGrammarItem extends Component {

  render() {
    return (
      <Wrapper onClick={this.props.onClick}>
        <CheckmarkWrapper>
          {this.props.completed && <Icon name="checkmark" color="green" />}
        </CheckmarkWrapper>
        <TitleWrapper>{this.props.title}</TitleWrapper>
      </Wrapper>
    );
  }
}

MapGrammarItem.propTypes = {
  title: propTypes.string.isRequired,
  completed: propTypes.bool,
  onClick: propTypes.func.isRequired
};

export default MapGrammarItem;
