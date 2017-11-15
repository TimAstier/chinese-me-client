import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import * as models from '../../../models';
import { bookComponents as c } from '../../../components';
import { default as s } from '../../../rootSelectors';

class Statement extends Component {

  render() {
    const { statement, sentenceType, displayNames } = this.props;
    return (
      <c.Statement
        sentences={statement ? statement.sentences : undefined }
        sentenceType={sentenceType}
        displayNames={displayNames}
        avatarId={statement ? statement.avatarId : undefined }
      />
    );
  }
}

Statement.propTypes = {
  statementId: propTypes.number.isRequired,
  statement: propTypes.instanceOf(models.Statement),
  avatar: propTypes.instanceOf(models.Avatar),
  sentenceType: propTypes.string.isRequired,
  displayNames: propTypes.bool.isRequired
};

const mapStateToProps = (state, ownProps) => ({
  statement: s.entities.getStatements(state).get(String(ownProps.statementId))
});

export default connect(
  mapStateToProps
)(Statement);
