import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { ElementsNav as ElementsNavComponent } from '../../components';
import s from '../../rootSelectors';
// import { actions as sagaActions } from '../../sagas/actions';

class ElementsNav extends Component {

  onPreviousClick() {
    return () => console.log('previous element');
  }

  onNextClick() {
    return () => console.log('next element');
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
  elementsNavParams: propTypes.object
};

const mapStateToProps = state => ({
  elementType: s.routing.getElementType(state),
  elementsNavParams: s.getElementsNavParams(state)
});

export default connect(
  mapStateToProps
)(ElementsNav);
