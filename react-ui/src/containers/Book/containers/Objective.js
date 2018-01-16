import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import s from '../../../rootSelectors';
import * as models from '../../../models';
import { bookComponents as c } from '../../../components';

class Objective extends Component {
  render() {
    return (
      <c.Objective
        grammars={this.props.grammars}
        grammarIds={this.props.episode.get('grammars')}
        text={this.props.text}
        pronunciations={this.props.pronunciations}
        pronunciationIds={this.props.episode.get('pronunciations')}
      />
    );
  }
}

Objective.propTypes = {
  grammars: propTypes.object.isRequired,
  episode: propTypes.instanceOf(models.Episode),
  text: propTypes.string,
  pronunciations: propTypes.object.isRequired
};

const mapStateToProps = state => ({
  grammars: s.entities.getGrammars(state),
  pronunciations: s.entities.getPronunciations(state),
  episode: s.getCurrentEpisode(state)
});

export default connect(
  mapStateToProps
)(Objective);
