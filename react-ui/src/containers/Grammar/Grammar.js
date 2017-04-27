import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Grammar as GrammarComponent } from '../../components';
import { fetch as fetchGrammar, getTitle, getExplanation, getSentences,
  getIsFetching } from '../../redux/grammar';

class Grammar extends Component {

  render() {
    return (
      <GrammarComponent
        fetchGrammar={this.props.fetchGrammar.bind(this)}
        sentences={this.props.sentences}
        title={this.props.title}
        explanation={this.props.explanation}
        isFetching={this.props.isFetching}
        id={Number(this.props.routeParams.id)}
      />
    );
  }
}

Grammar.propTypes = {
  fetchGrammar: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  explanation: PropTypes.string.isRequired,
  sentences: PropTypes.object.isRequired,
  isFetching: PropTypes.bool.isRequired,
  routeParams: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    title: getTitle(state),
    explanation: getExplanation(state),
    sentences: getSentences(state),
    isFetching: getIsFetching(state)
  };
}

export default connect(mapStateToProps, { fetchGrammar })(Grammar);
