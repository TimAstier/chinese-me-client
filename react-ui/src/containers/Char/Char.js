import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Char as CharComponent } from '../../components';
import { get as getChar } from '../../redux/char';

class Char extends Component {

  render() {
    return (
      <CharComponent
        getChar={this.props.getChar.bind(this)}
        id={Number(this.props.routeParams.charId)}
        chinese={this.props.chinese}
        pinyint={this.props.pinyint}
        explanation={this.props.explanation}
        isFetching={this.props.isFetching}
      />
    );
  }
}

Char.propTypes = {
  getChar: PropTypes.func.isRequired,
  chinese: PropTypes.string.isRequired,
  pinyint: PropTypes.string.isRequired,
  explanation: PropTypes.string.isRequired,
  isFetching: PropTypes.bool.isRequired,
  routeParams: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  const charState = state.get('char');
  return {
    chinese: charState.get('chinese'),
    pinyint: charState.get('pinyint'),
    explanation: charState.get('explanation'),
    isFetching: charState.get('isFetching')
  };
}

export default connect(mapStateToProps, { getChar })(Char);
