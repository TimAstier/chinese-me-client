import React, { Component, PropTypes } from 'react';
import { GrammarSentence } from '../';
import { ResourceLoader, ResourceNotFound } from '../';

class Grammar extends Component {

  componentDidMount() {
    return this.props.fetchGrammar(this.props.id);
  }

  componentDidUpdate(prevProps) {
    if (this.props.id !== prevProps.id) {
      this.props.fetchGrammar(this.props.id);
    }
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

  renderGrammar(title, explanation, sentences) {
    return (
      <div id="grammar">
        <div className="explanation">
          <h1>{title}</h1>
          <p>{explanation.split('\n').map((item, key) => {
            return (
              <span key={key}>
                {item}
                <br/>
              </span>
            );
          })}</p>
        </div>

        <div className="sentences">
          {this.renderSentences(sentences)}
        </div>
      </div>
    );
  }

  render() {
    const { title, explanation, sentences, isFetching } = this.props;
    if (isFetching) {
      return <ResourceLoader />;
    }
    if (title === '') {
      return <ResourceNotFound />;
    }
    return this.renderGrammar(title, explanation, sentences);
  }
}

Grammar.propTypes = {
  fetchGrammar: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  explanation: PropTypes.string.isRequired,
  sentences: PropTypes.object.isRequired,
  isFetching: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired
};

export default Grammar;
