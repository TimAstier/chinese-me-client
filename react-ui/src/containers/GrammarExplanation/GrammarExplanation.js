import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { GrammarExplanation as GrammarExplanationComponent }
  from '../../components';
import selectors from '../../rootSelectors';
import { Grammar } from '../../models';

class GrammarExplanation extends Component {

  render() {
    return (
      <GrammarExplanationComponent
        grammar={this.props.grammar}
      />
    );
  }
}

GrammarExplanation.propTypes = {
  grammar: propTypes.instanceOf(Grammar).isRequired
};

const mapStateToProps = state => ({
  grammar: selectors.getCurrentGrammar(state)
});

export default connect(
  mapStateToProps
)(GrammarExplanation);
