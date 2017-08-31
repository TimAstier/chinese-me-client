import React, { Component } from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import iconCheck from '../../images/iconCheck.svg';

const Wrapper = styled.div`
  border-radius: 8px;
  height: 32px;
  background-color: #f7f7f7;
  display: flex;
  cursor: pointer;
`;

const CheckmarkWrapper = styled.div`
  flex-basis: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NameWrapper = styled.div`
  font-family: 'Open Sans';
  font-size: 16px;
  color: #454545;
  display: flex;
  align-items: center;
`;

const StatsWrapper = styled.div`
  font-family: 'Open Sans';
  font-size: 16px;
  color: #7f8c94;
  flex-grow: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 22px;
`;

class ChapterHeader extends Component {

  render() {
    const { completed, name, completedElements, totalElements } = this.props;
    return (
      <Wrapper onClick={this.props.onClick}>
        <CheckmarkWrapper>
          {completed && <img src={iconCheck} alt="icon-check" />}
        </CheckmarkWrapper>
        <NameWrapper>
          {name}
        </NameWrapper>
        <StatsWrapper>
          {(completedElements !== undefined) && (totalElements !== undefined) &&
            completedElements + '/' + totalElements
          }
        </StatsWrapper>
      </Wrapper>
    );
  }
}

ChapterHeader.propTypes = {
  completed: propTypes.bool,
  name: propTypes.string.isRequired,
  completedElements: propTypes.number,
  totalElements: propTypes.number,
  onClick: propTypes.func.isRequired
};

export default ChapterHeader;
