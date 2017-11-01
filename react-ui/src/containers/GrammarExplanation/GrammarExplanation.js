import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { StudyVideo } from '../../components';
import s from '../../rootSelectors';
import { Grammar } from '../../models';

class GrammarExplanation extends Component {

  render() {
    return <StudyVideo videoUrl={this.props.grammar.videoUrl} />;
  }
}

GrammarExplanation.propTypes = {
  grammar: propTypes.instanceOf(Grammar).isRequired
};

const mapStateToProps = state => ({
  grammar: s.getCurrentGrammar(state)
});

export default connect(
  mapStateToProps
)(GrammarExplanation);
