import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import * as models from '../../../models';
import { bookComponents as c } from '../../../components';
import { default as s } from '../../../rootSelectors';
import insertVariables from '../../../utils/insertVariables';

class Statement extends Component {
  _name() {
    if (!this.props.statement) {
      return null;
    }
    const { avatars, sentenceType } = this.props;
    const avatar = avatars.get(String(this.props.statement.avatarId));
    if (!avatar) {
      // The avatar linked to the statement wasn't loaded with the dialog.
      // Usually means that the avatarDialogs records are wrong.
      return '{ AVATAR ERROR! }';
    }
    if (avatar.get('name') === 'Me') {
      if (sentenceType === 'chinese') {
        return insertVariables('[CHINESE_FAMILY_NAME][CHINESE_GIVEN_NAME]', this.props.settings);
      }
      return insertVariables('[GIVEN_NAME]', this.props.settings);
    }
    if (sentenceType === 'chinese') {
      return avatar.get('chineseName');
    }
    return avatar.get('name');
  }

  render() {
    const { statement, sentenceType, displayNames } = this.props;
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
  displayNames: propTypes.bool.isRequired,
  settings: propTypes.object.isRequired
};

const mapStateToProps = (state, ownProps) => ({
  statement: s.entities.getStatements(state).get(String(ownProps.statementId)),
  avatars: s.entities.getAvatars(state),
  settings: s.getAugmentedSettings(state)
});

export default connect(
  mapStateToProps
)(Statement);
