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
`;

const LeftChevronWrapper = styled.div`
  width: 90px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const RightChevronWrapper = styled.div`
  width: 90px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
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
