import React, { Component } from 'react';
import { GrammarSentence } from '../';

// TODO: Import this from the DB
const sentences = [{
  chinese: '我有三本书。',
  translation: 'I have three books.',
  rawtranslation: '(I HAVE THREE ROOT-OF BOOK.)'
}, {
  chinese: '它有两个名字。',
  translation: 'It has two names.',
  rawtranslation: '(IT HAVE TWO PIECE-OF NAME.)'
}, {
  chinese: '她也有中文名字吗？',
  translation: 'Does she have a Chinese name, too?',
  rawtranslation: '(SHE HAVE CHINESE NAME YES/NO?)'
}];

class Grammar extends Component {

  renderSentences(sentences) {
    return sentences.map((sentence, i) => {
      return (
        <GrammarSentence
          key={i}
          chinese={sentence.chinese}
          translation={sentence.translation}
          rawtranslation={sentence.rawtranslation}
        />
      );
    });
  }

  render() {
    return (
      <div id="grammar">
        <div className="explanation">
          <h1>有, yǒu meaning to have</h1>
          <p>
            有, yǒu, can mean either to have, or there is, depending
            on context. With a noun or pronoun, it means have.
          </p>
        </div>

        <div className="sentences">
          {this.renderSentences(sentences)}
        </div>
      </div>
    );
  }
}

Grammar.propTypes = {};

export default Grammar;
