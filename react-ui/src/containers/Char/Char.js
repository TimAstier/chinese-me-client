import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Char as CharComponent } from '../../components';
import { fetch as fetchChar, getChinese, getPinyint, getExplanation,
  getIsFetching } from '../../redux/char';
import { selectors as resourcesSelectors } from '../../redux/study';

class Char extends Component {

  render() {
    return (
      <CharComponent
        fetchChar={this.props.fetchChar.bind(this)}
        id={this.props.id}
        chinese={this.props.chinese}
        pinyint={this.props.pinyint}
        explanation={this.props.explanation}
        isFetching={this.props.isFetching}
      />
    );
  }
}

Char.propTypes = {
  fetchChar: PropTypes.func.isRequired,
  chinese: PropTypes.string.isRequired,
  pinyint: PropTypes.string.isRequired,
  explanation: PropTypes.string.isRequired,
  isFetching: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired
};

function mapStateToProps(state) {
  return {
    chinese: getChinese(state),
    pinyint: getPinyint(state),
    explanation: getExplanation(state),
    isFetching: getIsFetching(state),
    id: resourcesSelectors.getResourceId(state)
  };
}

export default connect(mapStateToProps, { fetchChar })(Char);
