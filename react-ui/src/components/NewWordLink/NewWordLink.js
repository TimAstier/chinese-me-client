import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { Word } from '../../models';
import { NewWordPopup } from '../.';

const LinkWrapper = styled.span`
  cursor: pointer;
  color: #454545;
  :hover {
    color: #55b6ff;
  }
  text-decoration: underline;
  text-decoration-color: #55b6ff;
  text-underline-position: under;
`;

const ListLink = styled.div`
  font-family: ChineseFont;
  font-size: 18px;
  margin: 10px 0px;
  cursor: pointer;
  color: #454545;
  :hover {
    color: #55b6ff;
  }
`;

class NewWordLink extends Component {
  renderMultiLinks() {
    const orderedWords = this.props.words.sort(
      (a, b) => a.get('chinese').length - b.get('chinese').length
    );
    const links = orderedWords.map(w => {
      return (
        <ListLink
          key={w.get('id')}
          onClick={
            (e) => {
              e.stopPropagation();
              this.props.newWordLinkClicked(w.get('id'));
            }
          }
        >
          {w.get('chinese')}
        </ListLink>);
    });
    return (
      <NewWordPopup
        simpChar={this.props.simpChar}
        links={links}
      />
    );
  }

  renderSingleLink() {
    return (
      <LinkWrapper
        onClick={
          () => this.props.newWordLinkClicked(this.props.words[0].get('id'))
        }
      >
        {this.props.simpChar}
      </LinkWrapper>
    );
  }

  render() {
    return this.props.words.length > 1 ?
      this.renderMultiLinks()
      : this.renderSingleLink();
  }
}

NewWordLink.propTypes = {
  simpChar: propTypes.string.isRequired,
  words: propTypes.arrayOf(propTypes.instanceOf(Word)).isRequired,
  newWordLinkClicked: propTypes.func.isRequired
};

export default NewWordLink;
