import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { capitalizeFirstLetter } from '../../utils/strings';

const Wrapper = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProgressWrapper = styled.div`
  flex-grow: 1 0 0;
  display: flex;
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
    const { type, totalElements, completionPercentage } = this.props;
    if (completionPercentage === 100) {
      return (
        <LabelWrapper>
          <LabelA>Completed</LabelA>
        </LabelWrapper>
      );
    }
    if (totalElements === 0) {
      return null;
    }
    const labelB = type + ((totalElements > 1) ? 's' : '') + ' left';
    const labelA = totalElements;
    return (
      <LabelWrapper>
        <LabelA>{labelA}</LabelA><span>{labelB}</span>
      </LabelWrapper>
    );
  }

  render() {
    return (
      <Wrapper>
        <ProgressWrapper>
          { this.props.currentElement || this.props.elementType === 'exam' ?
            this.renderWithPosition()
            : this.renderWithLeft()
          }
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
  completionPercentage: propTypes.number
};

export default ElementsNav;
