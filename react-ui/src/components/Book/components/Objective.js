import React, { Component } from 'react';
import propTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty';
import * as c from './.';
import { getGrammarLetter } from '../../../utils/bookContent';
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
    const { pronunciations } = this.props;
    const array = [];
    if (isEmpty(pronunciations)) {
      return null;
    }
    pronunciations.forEach((p, i) => {
      const text = pronunciations.length > 1 ? `${getGrammarLetter(i + 1)}. ${p}` : p;
      array.push(
        <div key={i}>{text}</div>
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
        <div key={id}>{`${getGrammarLetter(i + 1)}. ${this.props.grammars.get(String(id)).title}`}</div>
      );
    });
    return <c.P>{array}</c.P>;
  }

  render() {
    return (
      <Wrapper>
        <c.PartTitle name="objective" />
        <c.P><i>{this.props.text}</i></c.P>
        {
          !isEmpty(this.props.pronunciations) &&
            <c.PartTitle type="secondary">Pronunciation</c.PartTitle>
        }
        {this._renderPronunciations()}
        <c.PartTitle type="secondary">Patterns</c.PartTitle>
        {this._renderGrammars()}
      </Wrapper>
    );
  }
}

Objective.propTypes = {
  grammars: propTypes.object.isRequired,
  grammarIds: propTypes.array.isRequired,
  text: propTypes.string,
  pronunciations: propTypes.arrayOf(propTypes.string)
};

export default Objective;
