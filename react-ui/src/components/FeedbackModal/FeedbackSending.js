import React, { Component } from 'react';
import styled from 'styled-components';
import { Loader } from 'semantic-ui-react';

const Wrapper = styled.div`
  height: 600px;
`;

class FeedbackSending extends Component {

  render() {
    return (
      <Wrapper>
        <Loader active size="massive">Sending...</Loader>
      </Wrapper>
    );
  }
}

export default FeedbackSending;
