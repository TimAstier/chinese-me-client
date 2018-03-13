import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Statement } from '../../containers';
import styled from 'styled-components';
import iconPrevious from '../../images/iconPrevious.svg';
import iconNext from '../../images/iconNext.svg';
import { Sentence } from '../../models';

const Wrapper = styled.div`
  min-height: 310px;
  display: flex;
  justify-content: center;
  width: 100%;
`;

const LeftChevronWrapper = styled.div`
  max-width: 90px;
  min-width: 50px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  @media (max-width: 500px) {
    width: 25px;
    min-width: 0;
  }
`;

const RightChevronWrapper = styled.div`
  max-width: 90px;
  min-width: 50px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media (max-width: 500px) {
    width: 25px;
    min-width: 0;
  }
`;

const ChevronWrapper = styled.div`
  width: 50px;
  height: 50px;
  outline: none;
  border: none;
  background-color: #cdd6db;
  :hover {
    background-color: #b2babf;
  }
  :active {
    background-color: #454545;
  }
  cursor: pointer;
  border-radius: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 500px) {
    width: 25px;
    height: 150px;
    border-radius: 12px;
  }
`;

class StatementWrapper extends Component {
  render() {
    const { sentences, currentSentenceIndex, currentStatementIndex,
      statementsCount, nextStatement, previousStatement, dialogMode }
      = this.props;
    return (
      <Wrapper>
        <LeftChevronWrapper>
          {dialogMode === 'explore' && currentStatementIndex > 0 &&
            <ChevronWrapper
              onClick={() => previousStatement()}
            >
              <img src={iconPrevious} alt="previous statement" />
            </ChevronWrapper>
          }
        </LeftChevronWrapper>
        <Statement
          sentences={sentences}
          currentSentenceIndex={currentSentenceIndex}
          dialogMode={dialogMode}
        />
        <RightChevronWrapper>
          {dialogMode === 'explore' && currentStatementIndex < statementsCount - 1 &&
            <ChevronWrapper
              onClick={() => nextStatement()}
            >
              <img src={iconNext} alt="next statement" />
            </ChevronWrapper>
          }
        </RightChevronWrapper>
      </Wrapper>
    );
  }
}

StatementWrapper.propTypes = {
  sentences: propTypes.arrayOf(propTypes.instanceOf(Sentence)).isRequired,
  currentSentenceIndex: propTypes.number.isRequired,
  currentStatementIndex: propTypes.number.isRequired,
  statementsCount: propTypes.number.isRequired,
  previousStatement: propTypes.func.isRequired,
  nextStatement: propTypes.func.isRequired,
  dialogMode: propTypes.string.isRequired
};

export default StatementWrapper;
