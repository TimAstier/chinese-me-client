import React, { Component, PropTypes } from 'react';
import { GrammarSentence } from '../';
import { ResourceLoader, ResourceNotFound } from '../';

class Grammar extends Component {

  componentWillMount() {
    return this.props.getGrammar(this.props.id);
  }

  renderSentences(sentences) {
    return sentences.map((sentence, i) => {
      return (
        <GrammarSentence
          key={i}
          chinese={sentence.get('chinese')}
          translation={sentence.get('english')}
          rawtranslation={sentence.get('rawEnglish')}
        />
      );
    });
  }

  renderGrammar() {
    return (
      <div id="grammar">
        <div className="explanation">
          <h1>{this.props.grammar.get('title')}</h1>
          <p>{this.props.grammar.get('explanation')}</p>
        </div>

        <div className="sentences">
          {this.renderSentences(this.props.sentences)}
        </div>
      </div>
    );
  }

  render() {
    if (this.props.isFetching) {
      return <ResourceLoader />;
    }
    if (this.props.grammar.get('title') === undefined) {
      return <ResourceNotFound />;
    }
    return this.renderGrammar();
  }
}

Grammar.propTypes = {
  getGrammar: PropTypes.func.isRequired,
  grammar: PropTypes.object.isRequired,
  sentences: PropTypes.object.isRequired,
  isFetching: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired
};

export default Grammar;
