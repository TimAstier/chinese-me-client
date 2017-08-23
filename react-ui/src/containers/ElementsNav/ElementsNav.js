import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { ElementsNav as ElementsNavComponent } from '../../components';
import selectors from '../../rootSelectors';
import { actions as sagaActions } from '../../sagas/actions';

class ElementsNav extends Component {

  onPreviousClick() {
    return () => this.props.elementsNavPreviousClick();
  }

  onNextClick() {
    return () => this.props.elementsNavNextClick();
  }

  mapOptionsToScreenType(elementType) {
    switch (elementType) {
      case 'character': return this.props.charactersNavParams;
      case 'dialog': return this.props.dialogsNavParams;
      default: return undefined;
    }
  }

  render() {
    const elementType = this.props.currentUrl.split('/')[3];
    const typesWithMenu = ['character', 'dialog'];
    let elementsNavParams = undefined;
    if (typesWithMenu.indexOf(elementType) !== -1) {
      elementsNavParams = this.mapOptionsToScreenType(elementType);
    }
    return elementsNavParams ?
      <ElementsNavComponent
        {...elementsNavParams}
        onPreviousClick={this.onPreviousClick.bind(this)}
        onNextClick={this.onNextClick.bind(this)}
      />
      : null;
  }
}

ElementsNav.propTypes = {
  elementsNavParams: propTypes.object,
  charactersNavParams: propTypes.object,
  dialogsNavParams: propTypes.object,
  currentUrl: propTypes.string.isRequired,
  elementsNavPreviousClick: propTypes.func.isRequired,
  elementsNavNextClick: propTypes.func.isRequired
};

const mapStateToProps = state => ({
  charactersNavParams: selectors.getCharactersNavParams(state),
  dialogsNavParams: selectors.getDialogsNavParams(state),
  currentUrl: selectors.getCurrentUrl(state)
});

export default connect(
  mapStateToProps,
  {
    elementsNavPreviousClick: sagaActions.elementsNavPreviousClick,
    elementsNavNextClick: sagaActions.elementsNavNextClick
  }
)(ElementsNav);

// elementsNavParams: propTypes.object,
