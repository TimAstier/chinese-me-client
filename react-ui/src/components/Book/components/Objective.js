import React, { Component } from 'react';
import propTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty';
import * as c from './.';
import { getTitleLetter } from '../../../utils/bookContent';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: auto;
  border: solid black 2px;
  border-radius: 40px;
  width: 80%;
  margin-top: 60px;
  padding-bottom: 50px;
`;

class Objective extends Component {
  _renderPronunciations() {
    const array = [];
    if (isEmpty(this.props.pronunciationIds)) {
      return null;
    }
    this.props.pronunciationIds.forEach((id, i) => {
      array.push(
        <div key={id}>{`${getTitleLetter(i + 1)}. ${this.props.pronunciations.get(String(id)).title}`}</div>
      );
    });
    return <c.P>{array}</c.P>;
  }

  _renderGrammars() {
    const array = [];
    if (isEmpty(this.props.grammarIds)) {
      return null;
    }
    this.props.grammarIds.forEach((id, i) => {
      array.push(
        <div key={id}>{`${getTitleLetter(i + 1)}. ${this.props.grammars.get(String(id)).title}`}</div>
      );
    });
    return <c.P>{array}</c.P>;
  }

  render() {
    return (
      <Wrapper>
        <c.PartTitle name="objective" />
        <br />
        <c.PartTitle type="secondary">Conversation skill</c.PartTitle>
        <c.P>{this.props.text}</c.P>
        {
          (this.props.pronunciations.size !== 0) &&
            <c.PartTitle type="secondary">Pronunciation</c.PartTitle>
        }
        {this._renderPronunciations()}
        {
          (this.props.grammars.size !== 0) &&
            <c.PartTitle type="secondary">Patterns</c.PartTitle>
        }
        {this._renderGrammars()}
      </Wrapper>
    );
  }
}

Objective.propTypes = {
  grammars: propTypes.object.isRequired,
  grammarIds: propTypes.array.isRequired,
  text: propTypes.string,
  pronunciations: propTypes.object.isRequired,
  pronunciationIds: propTypes.array.isRequired,
};

export default Objective;
