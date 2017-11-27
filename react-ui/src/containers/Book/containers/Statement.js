import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import * as models from '../../../models';
import { bookComponents as c } from '../../../components';
import { default as s } from '../../../rootSelectors';

class Statement extends Component {

  _name() {
    if (!this.props.statement) {
      return null;
    }
    const { avatars, sentenceType } = this.props;
    const avatar = avatars.get(String(this.props.statement.avatarId));
    if (sentenceType === 'chinese') {
      return avatar.get('chineseName');
    }
    return avatar.get('name');
  }

  render() {
    const { statement, sentenceType, displayNames, displayTranslation } = this.props;
    return (
      <c.Statement
        sentences={statement ? statement.sentences : undefined }
        sentenceType={sentenceType}
        displayNames={displayNames}
        name={this._name()}
      />
    );
  }
}

Statement.propTypes = {
  statementId: propTypes.number.isRequired,
  statement: propTypes.instanceOf(models.Statement),
  avatars: propTypes.object.isRequired,
  sentenceType: propTypes.string.isRequired,
  displayNames: propTypes.bool.isRequired
};

const mapStateToProps = (state, ownProps) => ({
  statement: s.entities.getStatements(state).get(String(ownProps.statementId)),
  avatars: s.entities.getAvatars(state)
});

export default connect(
  mapStateToProps
)(Statement);
