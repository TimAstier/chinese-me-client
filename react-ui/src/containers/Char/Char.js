import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Char as CharComponent } from '../../components';
import { get as getChar } from '../../redux/chars';

class Char extends Component {

  render() {
    return (
      <CharComponent
        getChar={this.props.getChar.bind(this)}
        id={Number(this.props.routeParams.charId)}
        char={this.props.char}
        isFetching={this.props.isFetching}
      />
    );
  }
}

Char.propTypes = {
  getChar: PropTypes.func.isRequired,
  char: PropTypes.object.isRequired,
  isFetching: PropTypes.bool.isRequired,
  routeParams: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    char: state.get('chars').get('char'),
    isFetching: state.get('chars').get('isFetching')
  };
}

export default connect(mapStateToProps, { getChar })(Char);
