import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { Icon } from 'semantic-ui-react';

const Wrapper = styled.div`
  flex: 1 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TopWrapper = styled.div`
  flex: 1 0 0;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

const BottomWrapper = styled.div`
  padding-top: 20px;
  flex: 2 0 0;
  display: flex;
  flex-direction: column;
  font-family: 'Open Sans';
	font-size: 30px;
	color: #454545;
  line-height: 2;
`;

const Label = styled.div`
  font-family: 'Open Sans';
  font-size: 50px;
  color: #454545;
`;

class IntroductionWrapper extends Component {

  renderObjectives() {
    const array = [];
    this.props.objectives.forEach((o, i) => {
      array.push(
        <li key={i}><Icon name = "check circle" color="teal" />{o}</li>
      );
    });
    const Ul = styled.ul`
      list-style-type: none;
    `;
    return (
      <Ul>
        {array}
      </Ul>
    );
  }

  render() {
    return (
      <Wrapper>
        <TopWrapper>
          <Label>In this episode, you will learn:</Label>
        </TopWrapper>
        <BottomWrapper>
          {this.renderObjectives()}
        </BottomWrapper>
      </Wrapper>
    );
  }
}

IntroductionWrapper.propTypes = {
  objectives: propTypes.array.isRequired
};

export default IntroductionWrapper;
