import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { bookComponents as c } from '../.';
import storyIcon from '../../images/storyIcon.svg';

const Wrapper = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  max-width: 750px;
  margin-top: -50px;
  margin-bottom: -70px;
  margin-left: auto;
  margin-right: auto;
`;

const TitleWrapper = styled.div`
  text-align: center;
`;

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 300px;
`;

const ContentWrapper = styled.div`
  overflow-y: auto;
  border: 3px solid red;
  padding-top: 15px;
  padding-bottom: 15px;
`;

class CharacterEtymology extends Component {
  render() {
    return (
      <Wrapper>
        <TitleWrapper>
          <c.PartTitle noMargin>
            <Title>
              <img src={storyIcon} alt="" width={30}/>
              {'ORACLE BONES'}
              <c.Char>{this.props.character}</c.Char>
            </Title>
          </c.PartTitle>
        </TitleWrapper>
        <ContentWrapper>
          <this.props.content />
        </ContentWrapper>
      </Wrapper>
    );
  }
}

CharacterEtymology.propTypes = {
  content: propTypes.func.isRequired,
  character: propTypes.string.isRequired
};

export default CharacterEtymology;
