import React, { Component } from 'react';
import propTypes from 'prop-types';
import { ScrollableAppWrapper } from '../Shared';
import styled from 'styled-components';
import * as models from '../../models';
import ContentHOC from './ContentHOC';

const ScreenWrapper = styled.div`
  margin: 30px auto 50px;
  min-height: 640px;
  width: 700px;
  border-radius: 10px;
  background-color: #ffffff;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  padding: 80px 70px;
`;

class Lesson extends Component {
  render() {
    const Content = this.props.content;
    return (
      <ScrollableAppWrapper>
        <ScreenWrapper>
          {this.props.initialized &&
            <ContentHOC
              examples={this.props.examples}
              number={this.props.lesson.number }
              content={Content}
            />
          }
        </ScreenWrapper>
      </ScrollableAppWrapper>
    );
  }
}

Lesson.propTypes = {
  content: propTypes.func.isRequired,
  initialized: propTypes.bool.isRequired,
  examples: propTypes.arrayOf(propTypes.instanceOf(models.Example)).isRequired,
  lesson: propTypes.instanceOf(models.Lesson)
};

export default Lesson;
