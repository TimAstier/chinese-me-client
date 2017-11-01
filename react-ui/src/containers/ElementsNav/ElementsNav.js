import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { ElementsNav as ElementsNavComponent } from '../../components';
import s from '../../rootSelectors';
import { actions as sagaActions } from '../../sagas/actions';

class ElementsNav extends Component {

  onPreviousClick() {
    return () => this.props.elementsNavPreviousClick();
  }

  onNextClick() {
    return () => this.props.elementsNavNextClick();
  }

  render() {
    return this.props.elementsNavParams ?
      <ElementsNavComponent
        elementType={this.props.elementType}
        {...this.props.elementsNavParams}
        onPreviousClick={this.onPreviousClick.bind(this)}
        onNextClick={this.onNextClick.bind(this)}
      />
      : null;
  }
}

ElementsNav.propTypes = {
  elementType: propTypes.string.isRequired,
  elementsNavParams: propTypes.object,
  elementsNavPreviousClick: propTypes.func.isRequired,
  elementsNavNextClick: propTypes.func.isRequired,
};

const mapStateToProps = state => ({
  elementType: s.routing.getElementType(state),
  elementsNavParams: s.getElementsNavParams(state)
});

export default connect(
  mapStateToProps,
  {
    elementsNavPreviousClick: sagaActions.elementsNavPreviousClick,
    elementsNavNextClick: sagaActions.elementsNavNextClick
  }
)(ElementsNav);
