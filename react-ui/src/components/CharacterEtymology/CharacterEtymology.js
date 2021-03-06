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
  width: 100%;
  margin-top: -25px;
  margin-left: auto;
  margin-right: auto;
  height: 98%;
`;

const MiddleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
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
  width: 100%;
  ${''/* Always display the scrollbar  */}
  ::-webkit-scrollbar {
      -webkit-appearance: none;
      width: 7px;
  };
  ::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: rgba(0,0,0,.5);
    -webkit-box-shadow: 0 0 1px rgba(255,255,255,.5);
  };
`;

class CharacterEtymology extends Component {
  render() {
    if (!this.props.content) {
      return <div>'Error: Could not find etymology content file.'</div>;
    }
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
        <MiddleWrapper>
          <ContentWrapper>
            <this.props.content />
          </ContentWrapper>
        </MiddleWrapper>
      </Wrapper>
    );
  }
}

CharacterEtymology.propTypes = {
  content: propTypes.func.isRequired,
  character: propTypes.string.isRequired
};

export default CharacterEtymology;
