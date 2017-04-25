import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Grammar as GrammarComponent } from '../../components';
import { get as getGrammar } from '../../redux/grammars';

class Grammar extends Component {

  render() {
    return (
      <GrammarComponent
        getGrammar={this.props.getGrammar.bind(this)}
        sentences={this.props.sentences}
        grammar={this.props.grammar}
        isFetching={this.props.isFetching}
        id={Number(this.props.routeParams.grammarId)}
      />
    );
  }
}

Grammar.propTypes = {
  getGrammar: PropTypes.func.isRequired,
  grammar: PropTypes.object.isRequired,
  sentences: PropTypes.object.isRequired,
  isFetching: PropTypes.bool.isRequired,
  routeParams: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    grammar: state.get('grammars').get('grammar'),
    sentences: state.get('grammars').get('sentences'),
    isFetching: state.get('grammars').get('isFetching')
  };
}

export default connect(mapStateToProps, { getGrammar })(Grammar);
