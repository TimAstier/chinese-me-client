import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { capitalizeFirstLetter } from '../../utils/strings';
import iconElementPrevious from '../../images/iconElementPrevious.svg';
import iconElementNext from '../../images/iconElementNext.svg';

const Wrapper = styled.div`
  width: 400px;
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
  width: 150px;
  font-family: 'Open Sans';
	font-size: 18px;
	color: #b2babf;
  display: flex;
  justify-content: center;
  align-items: center;
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

class ElementsNav extends Component {

  render() {
    const { type, currentElement, totalElements } = this.props;
    const labelA = capitalizeFirstLetter(type) + ' ' + currentElement;
    const labelB = ' of ' + totalElements;
    return (
      <Wrapper>
        <ProgressWrapper>
          <LeftChevronWrapper>
            {currentElement > 1 &&
              <IconWrapper>
                <img
                  src={iconElementPrevious}
                  alt={'previous ' + type}
                  onClick={this.props.onPreviousClick()}
                />
              </IconWrapper>
            }
          </LeftChevronWrapper>
          <LabelWrapper>
            <LabelA>{labelA}</LabelA><span>{labelB}</span>
          </LabelWrapper>
          <RightChevronWrapper>
            {currentElement < totalElements &&
              <IconWrapper>
                <img
                  src={iconElementNext}
                  alt={'previous ' + type}
                  onClick={this.props.onNextClick()}
                />
              </IconWrapper>
            }
          </RightChevronWrapper>
        </ProgressWrapper>
      </Wrapper>
    );
  }
}

ElementsNav.propTypes = {
  type: propTypes.string.isRequired,
  currentElement: propTypes.number.isRequired,
  totalElements: propTypes.number.isRequired,
  onPreviousClick: propTypes.func.isRequired,
  onNextClick: propTypes.func.isRequired
};

export default ElementsNav;
