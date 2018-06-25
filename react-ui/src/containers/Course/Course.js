import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import Immutable from 'immutable';
import { Course as CourseComponent } from '../../components';
import s from '../../rootSelectors';

class Course extends Component {
  render() {
    return (
      <CourseComponent
        seasons={ this.props.seasons }
      />
    );
  }
}

const mapStateToProps = state => ({
  seasons: s.entities.getSeasons(state)
});

Course.propTypes = {
  seasons: propTypes.instanceOf(Immutable.OrderedMap).isRequired
};

export default connect(
  mapStateToProps
)(Course);
