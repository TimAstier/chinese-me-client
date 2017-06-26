import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { Icon, Progress } from 'semantic-ui-react';

const Wrapper = styled.div`
  width: 400px;
  height: 45px;
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

const ProgressBarWrapper = styled.div`
  flex: 4 0 0;
  padding-top: 8px;
`;

const LabelWrapper = styled.div`
  flex-grow: 1 0 0;
  font-family: Open Sans;
	font-size: 20px;
	font-weight: 600;
	color: #959595;
  display: flex;
  justify-content: center;
  align-items: center;
`;

class ProgressBar extends Component {

  render() {
    const { type, currentElement, totalElements } = this.props;
    const percent = currentElement / totalElements * 100;
    return (
      <Wrapper>
        <ProgressWrapper>
          <ChevronWrapper>
            {currentElement > 1 &&
              <Icon name="chevron left" size="large" color="teal" />
            }
          </ChevronWrapper>
          <ProgressBarWrapper>
            <Progress size= "small" percent={percent} color="teal" />
          </ProgressBarWrapper>
          <ChevronWrapper>
            {currentElement < totalElements &&
              <Icon name="chevron right" size="large" color="teal" />
            }
          </ChevronWrapper>
        </ProgressWrapper>
        <LabelWrapper>
          {type + ' ' + currentElement + ' of ' + totalElements}
        </LabelWrapper>
      </Wrapper>
    );
  }
}

ProgressBar.propTypes = {
  type: propTypes.string.isRequired,
  currentElement: propTypes.number.isRequired,
  totalElements: propTypes.number.isRequired
};

export default ProgressBar;
