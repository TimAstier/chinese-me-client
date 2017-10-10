import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { ElementsNav as ElementsNavComponent } from '../../components';
import selectors from '../../rootSelectors';
import { actions as sagaActions } from '../../sagas/actions';
import { elementTypesWithMenu } from '../../constants/study';

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
      case 'grammar': return this.props.grammarsNavParams;
      case 'review': return this.props.reviewNavParams;
      case 'exam': return this.props.examNavParams;
      default: return undefined;
    }
  }

  render() {
    const elementType = this.props.currentUrl.split('/')[3];
    let elementsNavParams = undefined;
    if (elementTypesWithMenu.indexOf(elementType) !== -1) {
      elementsNavParams = this.mapOptionsToScreenType(elementType);
    }
    return elementsNavParams ?
      <ElementsNavComponent
        elementType={elementType}
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
  grammarsNavParams: propTypes.object,
  dialogsNavParams: propTypes.object,
  reviewNavParams: propTypes.object,
  examNavParams: propTypes.object,
  currentUrl: propTypes.string.isRequired,
  elementsNavPreviousClick: propTypes.func.isRequired,
  elementsNavNextClick: propTypes.func.isRequired,
};

const mapStateToProps = state => ({
  charactersNavParams: selectors.getCharactersNavParams(state),
  dialogsNavParams: selectors.getDialogsNavParams(state),
  grammarsNavParams: selectors.getGrammarsNavParams(state),
  reviewNavParams: selectors.getReviewNavParams(state),
  examNavParams: selectors.getExamNavParams(state),
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
