import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { capitalizeFirstLetter } from '../../utils/strings';
import iconElementPrevious from '../../images/iconElementPrevious.svg';
import iconElementNext from '../../images/iconElementNext.svg';

const Wrapper = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const ProgressWrapper = styled.div`
  flex-grow: 1 0 0;
  display: flex;
`;

const LeftChevronWrapper = styled.div`
  flex: 1 0 0;
  width: 10px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 10px;
`;

const RightChevronWrapper = styled.div`
  flex: 1 0 0;
  width: 30px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 10px;
`;

const LabelWrapper = styled.div`
  max-width: 180px;
  font-family: 'Open Sans';
	font-size: 18px;
	color: #b2babf;
  text-align: center;
  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

const LabelA = styled.span`
  font-weight: 600;
  margin-right: 5px;
`;

const IconWrapper = styled.div`
  height: 26px;
  width: 26px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 13px;
  :hover {
    border: solid 2px #dce6eb;
  }
`;

// TODO: Separate ElementsNav and XX Left into 2 different components
class ElementsNav extends Component {
  renderWithPosition() {
    const { type, currentElement, totalElements } = this.props;
    const labelA = capitalizeFirstLetter(type) + ' ' + currentElement;
    const labelB = ' of ' + totalElements;
    return (
      <LabelWrapper>
        <LabelA>{labelA}</LabelA><span>{labelB}</span>
      </LabelWrapper>
    );
  }

  renderWithLeft() {
    const { type, totalElements } = this.props;
    if (totalElements === 0) {
      return (
        <LabelWrapper>
          <LabelA>Completed</LabelA>
        </LabelWrapper>
      );
    }
    const labelB = type + ((totalElements > 1) ? 's' : '') + ' left';
    const labelA = totalElements;
    return (
      <LabelWrapper>
        <LabelA>{labelA}</LabelA><span>{labelB}</span>
      </LabelWrapper>
    );
  }

  renderLeftChevron() {
    const { type, currentElement } = this.props;
    if (currentElement > 1 && type !== 'question') {
      return (
        <IconWrapper>
          <img
            src={iconElementPrevious}
            alt={'previous ' + type}
            onClick={this.props.onPreviousClick()}
          />
        </IconWrapper>
      );
    }
    return null;
  }

  renderRightChevron() {
    const { type, currentElement, totalElements } = this.props;
    if (currentElement && currentElement < totalElements && type !== 'question') {
      return (
        <IconWrapper>
          <img
            src={iconElementNext}
            alt={'previous ' + type}
            onClick={this.props.onNextClick()}
          />
        </IconWrapper>
      );
    }
    return null;
  }

  render() {
    return (
      <Wrapper>
        <ProgressWrapper>
          <LeftChevronWrapper>
            {this.renderLeftChevron()}
          </LeftChevronWrapper>
          { this.props.currentElement || this.props.elementType === 'exam' ?
            this.renderWithPosition()
            : this.renderWithLeft()
          }
          <RightChevronWrapper>
            {this.renderRightChevron()}
          </RightChevronWrapper>
        </ProgressWrapper>
      </Wrapper>
    );
  }
}

ElementsNav.propTypes = {
  elementType: propTypes.string.isRequired,
  type: propTypes.string.isRequired,
  currentElement: propTypes.number,
  totalElements: propTypes.number.isRequired,
  onPreviousClick: propTypes.func.isRequired,
  onNextClick: propTypes.func.isRequired
};

export default ElementsNav;
