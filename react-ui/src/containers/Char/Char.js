import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Char as CharComponent } from '../../components';
import { fetch as fetchChar, getChinese, getPinyint, getExplanation,
  getIsFetching } from '../../redux/char';

class Char extends Component {

  render() {
    return (
      <CharComponent
        fetchChar={this.props.fetchChar.bind(this)}
        id={Number(this.props.routeParams.id)}
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
  routeParams: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    chinese: getChinese(state),
    pinyint: getPinyint(state),
    explanation: getExplanation(state),
    isFetching: getIsFetching(state)
  };
}

export default connect(mapStateToProps, { fetchChar })(Char);
