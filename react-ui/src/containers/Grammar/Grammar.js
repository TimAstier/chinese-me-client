import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Grammar as GrammarComponent } from '../../components';
import { fetch as fetchGrammar, getTitle, getExplanation, getSentences,
  getIsFetching } from '../../redux/grammar';
import { selectors as resourcesSelectors } from '../../redux/study';

class Grammar extends Component {

  render() {
    // When mounted from study route, id is defined from props
    // When mounted from resource route, id is defined from params
    return (
      <GrammarComponent
        fetchGrammar={this.props.fetchGrammar.bind(this)}
        sentences={this.props.sentences}
        title={this.props.title}
        explanation={this.props.explanation}
        isFetching={this.props.isFetching}
        id={this.props.id || this.props.params.id}
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
  id: PropTypes.string.isRequired,
  params: PropTypes.object
};

function mapStateToProps(state) {
  return {
    title: getTitle(state),
    explanation: getExplanation(state),
    sentences: getSentences(state),
    isFetching: getIsFetching(state),
    id: resourcesSelectors.getResourceId(state)
  };
}

export default connect(mapStateToProps, { fetchGrammar })(Grammar);
