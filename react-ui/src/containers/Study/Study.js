import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import s from '../../rootSelectors';

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

class Study extends Component {
  render() {
    return (
      <Wrapper>
        {this.props.initialized && this.props.children}
      </Wrapper>
    );
  }
}

Study.propTypes = {
  children: propTypes.object,
  initialized: propTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  initialized: s.app.getInitialized(state)
});

export default connect(
  mapStateToProps
)(Study);
