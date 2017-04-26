import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Grammar as GrammarComponent } from '../../components';
import { get as getGrammar } from '../../redux/grammar';

class Grammar extends Component {

  render() {
    return (
      <GrammarComponent
        getGrammar={this.props.getGrammar.bind(this)}
        sentences={this.props.sentences}
        title={this.props.title}
        explanation={this.props.explanation}
        isFetching={this.props.isFetching}
        id={Number(this.props.routeParams.grammarId)}
      />
    );
  }
}

Grammar.propTypes = {
  getGrammar: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  explanation: PropTypes.string.isRequired,
  sentences: PropTypes.object.isRequired,
  isFetching: PropTypes.bool.isRequired,
  routeParams: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  const grammarState = state.get('grammar');
  return {
    title: grammarState.get('title'),
    explanation: grammarState.get('title'),
    sentences: grammarState.get('sentences'),
    isFetching: grammarState.get('isFetching')
  };
}

export default connect(mapStateToProps, { getGrammar })(Grammar);
