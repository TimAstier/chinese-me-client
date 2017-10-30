import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Popup } from 'semantic-ui-react';
import styled from 'styled-components';

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const popupStyle = {
  borderRadius: '10px',
  backgroundColor: '#ffffff',
  boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.18)',
};

const LinkWrapper = styled.span`
  cursor: pointer;
  color: #454545;
`;

class NewWordPopup extends Component {
  state = { isOpen: false }

  trigger = () => {
    return (
      <LinkWrapper>
        {this.props.simpChar}
      </LinkWrapper>
    );
  }

  handleOpen = () => {
    this.setState({ isOpen: true });
  }

  handleClose = () => {
    this.setState({ isOpen: false });
  }

  render() {
    return (
      <Popup
        hoverable
        style={popupStyle}
        trigger={this.trigger()}
        open={this.state.isOpen}
        onOpen={this.handleOpen}
        onClose={this.handleClose}
        onClick={this.handleClose}
        positioning="bottom center"
      >
        <Popup.Content>
          <ListWrapper>
            {this.props.links}
          </ListWrapper>
        </Popup.Content>
      </Popup>
    );
  }
}

NewWordPopup.propTypes = {
  simpChar: propTypes.string.isRequired,
  links: propTypes.array.isRequired
};

export default NewWordPopup;
