import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { bookComponents as c } from '../../../components';
import * as models from '../../../models';
import s from '../../../rootSelectors';

class GrammarTitle extends Component {

  render() {
    return (
      <c.GrammarTitle
        grammarId={this.props.grammar ? this.props.grammar.id : ''}
        title={this.props.grammar ? this.props.grammar.title : ''}
        letter={this.props.letter}
      />
    );
  }
}

GrammarTitle.propTypes = {
  grammarId: propTypes.number.isRequired,
  grammar: propTypes.instanceOf(models.Grammar),
  letter: propTypes.string.isRequired
};

const mapStateToProps = (state, ownProps) => ({
  grammar: s.entities.getGrammars(state).get(String(ownProps.grammarId))
});

export default connect(
  mapStateToProps
)(GrammarTitle);
