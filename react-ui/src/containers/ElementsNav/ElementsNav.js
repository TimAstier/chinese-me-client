import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { ElementsNav as ElementsNavComponent } from '../../components';
import s from '../../rootSelectors';

class ElementsNav extends Component {
  render() {
    return this.props.elementsNavParams ?
      <ElementsNavComponent
        elementType={this.props.elementType}
        completionPercentage={this.props.completionPercentage}
        {...this.props.elementsNavParams}
      />
      : null;
  }
}

ElementsNav.propTypes = {
  elementType: propTypes.string.isRequired,
  elementsNavParams: propTypes.object,
  completionPercentage: propTypes.number // used to set 'completed' in Practice
};

const mapStateToProps = state => ({
  elementType: s.routing.getElementType(state),
  elementsNavParams: s.getElementsNavParams(state),
  completionPercentage: s.getProgressbarCompletion(state)
});

export default connect(
  mapStateToProps
)(ElementsNav);
