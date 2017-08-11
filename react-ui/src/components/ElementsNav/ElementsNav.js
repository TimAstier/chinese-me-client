import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { Icon } from 'semantic-ui-react';
import { capitalizeFirstLetter } from '../../utils/strings';

const Wrapper = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
`;

const ProgressWrapper = styled.div`
  flex-grow: 1 0 0;
  display: flex;
`;

const ChevronWrapper = styled.div`
  flex: 1 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LabelWrapper = styled.div`
  flex: 4 0 0;
  font-family: Open Sans;
	font-size: 20px;
	font-weight: 600;
	color: #959595;
  display: flex;
  justify-content: center;
  align-items: center;
`;

class ProgressMenu extends Component {

  render() {
    const { type, currentElement, totalElements } = this.props;
    const label = capitalizeFirstLetter(type) +
      ' ' + currentElement + ' of ' + totalElements;
    return (
      <Wrapper>
        <ProgressWrapper>
          <ChevronWrapper>
            {currentElement > 1 &&
              <Icon name="chevron left" size="large" color="teal" />
            }
          </ChevronWrapper>
          <LabelWrapper>
            {label}
          </LabelWrapper>
          <ChevronWrapper>
            {currentElement < totalElements &&
              <Icon name="chevron right" size="large" color="teal" />
            }
          </ChevronWrapper>
        </ProgressWrapper>
      </Wrapper>
    );
  }
}

ProgressMenu.propTypes = {
  type: propTypes.string.isRequired,
  currentElement: propTypes.number.isRequired,
  totalElements: propTypes.number.isRequired
};

export default ProgressMenu;
